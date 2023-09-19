<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Professor extends Model
{
    use HasFactory;

    protected $table = 'professor';

    protected $fillable = [
        'id_professor',
        'name_professor',
        'email',
        'email_verified_at',
        'password_professor',
        'remember_token',
        'created_at',
        'updated_at',
    ];


    public function post(){
        return $this->hasMany(Post::class);
    }



}
