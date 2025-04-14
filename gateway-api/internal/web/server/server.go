package server

import (
	"net/http"

	"github.com/devfullcycle/imersao22/go-gateway/internal/service"
	"github.com/devfullcycle/imersao22/go-gateway/internal/web/handlers"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/cors"
)

type Server struct {
	router         *chi.Mux
	server         *http.Server
	accountService *service.AccountService
	invoiceService *service.InvoiceService
	port           string
}

func NewServer(accountService *service.AccountService, invoiceService *service.InvoiceService, port string) *Server {
	return &Server{
		router:         chi.NewRouter(),
		accountService: accountService,
		invoiceService: invoiceService,
		port:           port,
	}
}

func (s *Server) ConfigureRoutes() {
	accountHandler := handlers.NewAccountHandler(s.accountService)
	invoiceHandler := handlers.NewInvoiceHandler(s.invoiceService)
	// authMiddleware := middleware.NewAuthMiddleware(s.accountService)

	// Configure CORS
	s.router.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{"*"}, // Permite todos os origens
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token", "X-API-KEY"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: true,
		MaxAge:           300, // Maximum value not ignored by any major browser
	}))

	s.router.Post("/api/accounts", accountHandler.Create)
	s.router.Get("/api/accounts", accountHandler.Get)

	s.router.Group(func(r chi.Router) {
		// r.Use(authMiddleware.Authenticate)
		s.router.Post("/api/invoice", invoiceHandler.Create)
		s.router.Get("/api/invoice/{id}", invoiceHandler.GetByID)
		s.router.Get("/api/invoice", invoiceHandler.ListByAccount)
	})
}

func (s *Server) Start() error {
	s.server = &http.Server{
		Addr:    ":" + s.port,
		Handler: s.router,
	}
	return s.server.ListenAndServe()
}
