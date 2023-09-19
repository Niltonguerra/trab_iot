<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('aluno_formulario', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_aluno'); // Nome da coluna da chave estrangeira
            $table->unsignedBigInteger('id_formulario');

            //fazendo a ligação com as outras tabelas
            $table->foreign('id_aluno')->references('id_aluno')->on('aluno'); // Referência à tabela "users" e à coluna "id"
            $table->foreign('id_formulario')->references('id_formulario')->on('formulario');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('aluno_formulario');
    }
};
