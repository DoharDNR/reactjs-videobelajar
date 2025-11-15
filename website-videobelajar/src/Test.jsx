import React, { useState } from "react";
import "./App.css";

const Test = () => {
  // Array berisi 5 objek soal/teks
  const [soalArray] = useState([
    {
      id: 1,
      pertanyaan: "Apa itu ReactJS?",
      jawaban:
        "ReactJS adalah library JavaScript untuk membangun user interface yang dikembangkan oleh Facebook.",
    },
    {
      id: 2,
      pertanyaan: "Apa keuntungan menggunakan React?",
      jawaban:
        "Keuntungan React termasuk virtual DOM, komponen reusable, one-way data flow, dan ecosystem yang besar.",
    },
    {
      id: 3,
      pertanyaan: "Apa perbedaan antara state dan props?",
      jawaban:
        "State adalah data internal komponen yang dapat berubah, sedangkan props adalah data yang diterima dari parent component dan bersifat read-only.",
    },
    {
      id: 4,
      pertanyaan: "Apa itu JSX?",
      jawaban:
        "JSX adalah syntax extension untuk JavaScript yang memungkinkan kita menulis HTML-like code dalam JavaScript.",
    },
    {
      id: 5,
      pertanyaan: "Apa itu React Hooks?",
      jawaban:
        "React Hooks adalah fungsi yang memungkinkan kita menggunakan state dan lifecycle features dalam functional components.",
    },
  ]);

  const [soalAktif, setSoalAktif] = useState(null);

  const handleTampilkanSoal = (soal) => {
    setSoalAktif(soal);
  };

  const handleSembunyikanSoal = () => {
    setSoalAktif(null);
  };

  return (
    <div className="app">
      <h1>Kumpulan Soal ReactJS</h1>
      <p>Pilih salah satu soal untuk melihat penjelasannya:</p>

      <div className="button-container">
        {soalArray.map((soal) => (
          <button
            key={soal.id}
            className={`soal-button ${
              soalAktif?.id === soal.id ? "active" : ""
            }`}
            onClick={() => handleTampilkanSoal(soal)}
          >
            Soal {soal.id}
          </button>
        ))}
      </div>

      {soalAktif && (
        <div className="soal-content">
          <h2>Soal {soalAktif.id}</h2>
          <h3>{soalAktif.pertanyaan}</h3>
          <p>{soalAktif.jawaban}</p>
          <button className="close-button" onClick={handleSembunyikanSoal}>
            Tutup
          </button>
        </div>
      )}

      {!soalAktif && (
        <div className="placeholder">
          <p>Pilih salah satu tombol di atas untuk menampilkan soal</p>
        </div>
      )}
    </div>
  );
};

export default Test;
