import React, { useState } from 'react';
import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";
import Footer from "../../components/admin/Adminfooter";
import './AddDoctor.css';
const AddDoctor = () => {
    const [doctor, setDoctor] = useState({
        name: '',
        specialty: '',
        email: '',
        phone: '',
        photo: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDoctor({
            ...doctor,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setDoctor({
            ...doctor,
            photo: file,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(doctor);
    };

    const handleImagePreview = () => {
        if (doctor.photo) {
            return URL.createObjectURL(doctor.photo);
        }
        return null;
    };

    return (
        <div className="admin-layout">
            <Header />
            <div className="main-content">
                <Sidebar />
                <section className="content">
                    <h2>Ajouter un Docteur</h2>
                    <form onSubmit={handleSubmit} className="doctor-form">
                        <label htmlFor="name">Nom du Docteur:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={doctor.name}
                            onChange={handleChange}
                            placeholder="Entrez le nom du docteur"
                            required
                        />

                        <label htmlFor="specialty">Spécialité:</label>
                        <input
                            type="text"
                            name="specialty"
                            id="specialty"
                            value={doctor.specialty}
                            onChange={handleChange}
                            placeholder="Entrez la spécialité"
                            required
                        />

                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={doctor.email}
                            onChange={handleChange}
                            placeholder="Entrez l'email"
                            required
                        />

                        <label htmlFor="phone">Téléphone:</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={doctor.phone}
                            onChange={handleChange}
                            placeholder="Entrez le téléphone"
                            required
                        />

                        <label htmlFor="photo">Photo du Docteur:</label>
                        <input
                            type="file"
                            name="photo"
                            id="photo"
                            accept="image/*"
                            onChange={handleFileChange}
                        />

                        {doctor.photo && (
                            <div className="image-preview">
                                <h3>Aperçu de la photo :</h3>
                                <img
                                    src={handleImagePreview()}
                                    alt="Aperçu"
                                    style={{
                                        width: '150px',
                                        height: '150px',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                        border: '2px solid #ddd'
                                    }}
                                />
                            </div>
                        )}

                        <button type="submit" className="submit-button">Ajouter</button>
                    </form>

                </section>
            </div>
            <Footer />
        </div>
    );
};

export default AddDoctor;
