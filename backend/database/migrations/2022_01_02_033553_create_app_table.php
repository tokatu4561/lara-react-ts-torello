<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('app', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
        });

        Schema::create('taskCards', function (Blueprint $table) {
            $table->id();
            $table->string('draggableId');
            $table->string('title');

            $table->timestamps();
        });

        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('taskCardId');
            $table->string('draggableId');
            $table->string('text');
            $table->timestamps();

            $table->foreign('taskCardId')->references('id')->on('taskCards');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('app');
    }
}
