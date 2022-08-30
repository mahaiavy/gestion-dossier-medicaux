<?php
namespace App\Repository;

use App\Models\User;

class ConversationRepository {

    /**
     * @var User
     */
    private $user;

    public function __construct(User $user)
    {
        $this->user=$user;
    }

    public function getConversation(int $userId){
      return  $this->user->newQuery()
                    ->select('name','id')
                    ->where('id','!=',$userId)
                    ->get();
    }
}