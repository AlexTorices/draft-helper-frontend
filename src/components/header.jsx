import React from 'react'

export function LolHeader() {
    return (
        <div class="header-container">
            <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Draft Helper</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#TODO3">Helper</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#TODO">Create</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a class="nav-link" href="#TODO2">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <h1 class="main-title">
                League of Legends | Draft helper
            </h1>
        </div>
    )
}