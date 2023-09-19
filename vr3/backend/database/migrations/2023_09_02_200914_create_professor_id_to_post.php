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
        Schema::create('professor_post', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_professor'); // Nome da coluna da chave estrangeira
            $table->unsignedBigInteger('id_post');

            //fazendo a ligação com as outras tabelas
            $table->foreign('id_professor')->references('id_professor')->on('professor'); // Referência à tabela "users" e à coluna "id"
            $table->foreign('id_post')->references('id_post')->on('post');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('professor_post');
    }
};
