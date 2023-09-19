<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;








// não esqueça de importar o model criado!!!
use App\Models\Aluno;

use App\Models\Formulario;

use App\Models\Post;

use App\Models\Professor;

use App\Models\User;







//  use Dotenv\Validator;
use Illuminate\Support\Facades\Validator;

class OrtaController extends Controller
{
    public function store(Request $request)
    {
        // validação dos dados

        // $validator = Validator::make($request->all(),[


        //     'id_professor' => 'required|max:191',
        //     'name_professor' => 'required|max:191',
        //     'email' => 'required|max:191',
        //     'email_verified_at' => 'required|max:191',
        //     'password_professor' => 'required|max:191',
        //     'remember_token' => 'required|max:191',
        //     'created_at' => 'required|max:191',
        //     'updated_at' => 'required|max:191',
        // ]);



        // if($validator->fails()){


            // return response()->json([
            //     'validate_err' => $validator->messages(),
            // ]);


        // }else{


            // aqui ele vai instaciar o model de student encontrado em: App\Models\Student
            // e vai puxar as informações enviadas pela api
            //resumindo
            //vai pegar as informações que a api está recebendo do react
            $professor = new Professor();
            $professor->id_professor = $request->input('id_professor');
            $professor->name_professor = $request->input('name_professor');
            $professor->email = $request->input('email');
            $professor->password_professor = $request->input('password_professor');
            $professor->email_verified_at = $request->input('email_verified_at');
            $professor->remember_token = $request->input('remember_token');
            $professor->created_at = $request->input('created_at');
            $professor->updated_at = $request->input('updated_at');



            //aqui ele vai enviar os dados para serem salvos no banco de dados
            $professor->save();
            return response()->json([
            'status' => 200,
            'message' => 'professor cadastrado com sucesso!',
            ]);


        // }
    }


    public function index(){
        $professor = Professor::all();

        return response()->json([
            'status' => 200,
            'professors' => $professor,
        ]);
    }

}



