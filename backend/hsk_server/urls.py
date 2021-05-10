from django.urls import path
from .views import hsk_words_list, \
    hsk_single_word, \
    all_hsk_levels, \
    single_hsk_level, \
    revision_list, \
    add_revision_word, \
    delete_revision_word

urlpatterns = [
    # HSK
    path("hsk_words/", hsk_words_list, name="hsk_words"),
    path("hsk_words/<str:chinese_characters>", hsk_single_word, name="hsk_single_word"),
    path("hsk_level/", all_hsk_levels, name="all_hsk_levels"),
    path("hsk_level/<int:level>", single_hsk_level, name="hsk_level"),
    path("revision_list/", revision_list, name="revision_list"),
    path('add_revision_word/', add_revision_word, name="edit_revision_list"),
    path('delete_revision_word/', delete_revision_word, name="edit_revision_list"),
]
