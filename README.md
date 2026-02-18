# BananaPedia - Product Listing App

A React Native application demonstrating clean architecture with REST API integration, Context API for state management, and production-ready error handling.

## Architecture Explanation

This application follows a clean architecture pattern with clear separation of concerns across three main layers. The **Service Layer** handles all API communication, the **Context Layer** manages global state without prop drilling, and the **View Layer** contains only UI logic. Each layer has a single responsibility, making the code maintainable and scalable. Components are modular and reusable, and the strict separation allows you to modify one layer without affecting others.

## Context API - Global State Management

The Context API eliminates prop drilling by providing centralized state accessible throughout the app. `ProductContext` stores products, loading status, and error messages globally. The `ProductProvider` wraps the app, and any component accesses state using the `useProducts()` hook. This ensures a single source of truth—when data is fetched in one screen, it's available everywhere without re-fetching or passing props.

## Axios Instance - Reusable API Configuration

A centralized Axios instance defines the `baseURL` once, so all API calls use clean relative paths. The 10-second timeout prevents hanging requests, and centralized configuration makes it easy to switch environments or add authentication. Future enhancements like interceptors or logging apply automatically to all API calls, making the app more maintainable than using raw fetch.

## Installation & Running

```bash
npm install          # Install dependencies
npm run android      # Run on Android
npm run ios          # Run on iOS
```

## Features

- ✅ REST API integration with Axios
- ✅ Global state management with Context API
- ✅ Clean architecture with separation of concerns
- ✅ Loading, error, empty, and success states
- ✅ Reusable component structure
- ✅ Modern UI design

**Data Source:** [Fake Store API](https://fakestoreapi.com/products)
