//NO TOCAR NADA DE ESTE ARCHIVO
// Este archivo contiene el componente PetPixel que simula una mascota virtual (SISTEMA COMPLEJO)

import React, { useState, useEffect, useCallback } from 'react';
import '../styles/PetPixel.css'; 
import PetImage from '../assets/images/pet.png';

const PetPixel = () => {
    const [hambre, setHambre] = useState(50);
    const [felicidad, setFelicidad] = useState(50);
    const [energia, setEnergia] = useState(50);
    const [estado, setEstado] = useState("¡Tu mascota está feliz!");
    const [coupon, setCoupon] = useState("");
    const [couponClaimed, setCouponClaimed] = useState(false);
    const [isGameVisible, setIsGameVisible] = useState(false); // Controla si el juego es visible

    // Genera un cupón con un descuento aleatorio
    const generarCoupon = () => {
        const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let couponCode = "Coupon-";
        for (let i = 0; i < 5; i++) {
            couponCode += letras.charAt(Math.floor(Math.random() * letras.length));
        }
        const descuentos = ["5%", "10%", "15%"];
        const descuento = descuentos[Math.floor(Math.random() * descuentos.length)];
        return `${couponCode} - Canjealo por un descuento del ${descuento}`;
    };

    // Muestra el cupón si la felicidad llega al 100%
    const mostrarCoupon = useCallback(() => {
        if (felicidad === 100 && !couponClaimed) {
            setCoupon(generarCoupon());
            setCouponClaimed(true);
        }
    }, [felicidad, couponClaimed]);

    // Actualiza el estado de ánimo de la mascota
    const actualizarEstadoAnimo = useCallback(() => {
        if (hambre > 80) {
            setEstado("¡Tu mascota tiene hambre!");
        } else if (felicidad < 20) {
            setEstado("¡Tu mascota se siente triste!");
        } else if (energia < 20) {
            setEstado("¡Tu mascota tiene sueño!");
        } else {
            setEstado("¡Tu mascota está feliz!");
        }
    }, [hambre, felicidad, energia]);

    // Funciones para interactuar con la mascota
    const alimentarMascota = () => {
        setHambre((prev) => Math.max(0, prev - 15)); // Reduce el hambre más rápido
        setFelicidad((prev) => Math.min(100, prev + 4)); // Aumenta la felicidad más rápido
        setEnergia((prev) => Math.min(100, prev + 5)); // Aumenta un poco la energía
    };

    const jugarConMascota = () => {
        setHambre((prev) => Math.min(100, prev + 10)); // Aumenta el hambre más rápido
        setEnergia((prev) => Math.max(0, prev - 15)); // Reduce la energía más rápido
        setFelicidad((prev) => Math.min(100, prev + 4)); // Aumenta la felicidad más rápido
    };

    const dormirMascota = () => {
        setEnergia((prev) => Math.min(100, prev + 20)); // Aumenta la energía más rápido
        setFelicidad((prev) => Math.max(0, prev - 8)); // Reduce un poco la felicidad
        setHambre((prev) => Math.min(100, prev + 10)); // Aumenta el hambre más rápido
    };

    // Efecto para actualizar los estados automáticamente cada 2 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setHambre((prev) => Math.min(100, prev + 3)); // El hambre aumenta más rápido
            setFelicidad((prev) => Math.max(0, prev - 2)); // La felicidad disminuye más rápido
            setEnergia((prev) => Math.max(0, prev - 3)); // La energía disminuye más rápido
            actualizarEstadoAnimo();
            mostrarCoupon();
        }, 2000); // Intervalo reducido a 2 segundos 

        return () => clearInterval(interval);
    }, [actualizarEstadoAnimo, mostrarCoupon]);

    return (
        <div className="pet-container">
            {/* Botón para abrir el juego */}
            {!isGameVisible && (
                <div className="game-trigger">
                    <button onClick={() => setIsGameVisible(true)}>
                        ¿Quieres un descuento? ¡Haz clic aquí!
                    </button>
                </div>
            )}

            {/* Juego completo */}
            {isGameVisible && (
                <div className="pet-game-container">
                    {/* Botón para cerrar el juego */}
                    <button className="close-button" onClick={() => setIsGameVisible(false)}>
                        X
                    </button>

                    <div className="game-info">
                        <h1>Descuento</h1>
                        <p>Haz que tu mascota llegue a <strong>100 de felicidad</strong> y gana un cupón.</p>
                    </div>

                    <div className="pet-game">
                        <h1>Mascota Virtual</h1>
                        <div className="pet">
                            <img id="pet-image" src={PetImage} alt="Mascota virtual" />
                            <p id="pet-status">{estado}</p>
                        </div>
                        <div className="stats">
                            <p>Hambre: <span id="hunger">{hambre}</span></p>
                            <p>Felicidad: <span id="happiness">{felicidad}</span></p>
                            <p>Energía: <span id="energy">{energia}</span></p>
                        </div>
                        <div className="actions">
                            <button onClick={alimentarMascota}>Alimentar</button>
                            <button onClick={jugarConMascota}>Jugar</button>
                            <button onClick={dormirMascota}>Dormir</button>
                        </div>

                        {/* Muestra el cupón debajo del juego */}
                        {coupon && (
                            <div className="coupon">
                                <p>¡Felicidades! Has ganado un cupón:</p>
                                <p><strong>{coupon}</strong></p>
                                <p>Canjealo por un descuento en tu próxima compra.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PetPixel;