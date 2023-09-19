<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;


    //diz para o sistema que tem uma tabela criada com esse nome 'students' e os
    //respectivos campos, mas é claro que também precisa criar uma migrate para a
    //tabela students

    protected $table = 'students';

    protected $fillable = [
        'name',
        'course',
        'email',
        'phone',
    ];
}
