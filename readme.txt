EGAR SARL — site vitrine
========================

Le site statique conserve le design sombre et les photographies existantes.
Les six pages de prestations sont accessibles depuis les cartes et la liste
« Toutes nos prestations ». Chaque page dispose de ses métadonnées, de son
URL canonique egarbtp.fr et de données structurées. Les pages légales sont
accessibles depuis le pied de page. Les polices sont hébergées localement.

Formulaire
----------
Le formulaire devis-egar utilise FormSubmit (POST multipart), sans mailto.
Il contient un champ anti-spam invisible ; Netlify applique son filtrage.
Une pièce jointe JPG, PNG, WebP ou PDF est proposée (5 Mo maximum).
Les noms des champs doivent rester identiques à ceux du formulaire statique.
Le marqueur d'activation Netlify Forms a été créé pour le prochain déploiement.
Le bouton affiche une confirmation uniquement après une réponse HTTP réussie ;
en cas d'échec, les champs restent remplis. Sans JavaScript, le formulaire POST
redirige vers /merci après traitement par Netlify.

Points opérationnels à finaliser
-------------------------------
Les demandes du formulaire sont transmises par FormSubmit à egar@outlook.fr. Ne pas considérer la réception comme validée avant d’avoir confirmé l’adresse depuis le premier e-mail FormSubmit et effectué un test reçu dans cette boîte.

Le déploiement manuel de vérification a été refusé (HTTP 403). Le workflow
habituel doit publier les fichiers et activer la détection des formulaires.
Après publication, envoyer une demande clairement identifiée « Vérification du formulaire EGAR » avec une adresse e-mail valide et une description complète. Confirmer l’adresse egar@outlook.fr depuis le premier e-mail FormSubmit, puis vérifier la réception du test et de la pièce jointe.
Un HTTP 200 seul ne prouve pas la réception dans la boîte de destination.

Le domaine egarbtp.fr n'est actuellement pas associé à ce projet Netlify.
Rattacher le domaine, vérifier son DNS et son certificat HTTPS avant de
considérer les nouvelles pages publiées sur le domaine canonique. Préserver
le site actuellement accessible sur ce domaine pendant cette opération.
Après rattachement, rediriger la version Netlify et les variantes www vers
l'adresse principale en conservant les chemins, pour éviter les doublons.

Référencement
-------------
Dans Google Search Console, utiliser une propriété Domaine egarbtp.fr,
valider sa propriété avec l'enregistrement DNS fourni par Google, soumettre
https://egarbtp.fr/sitemap.xml et inspecter l'accueil et les six prestations.
Aucun code de validation de propriété n'a été inventé. Aucun accès Search
Console n'était disponible pour confirmer l'indexation. Les résultats Google
et les Core Web Vitals réels se suivent après publication ; aucun classement
ni score ne peut être garanti par ces modifications.

Aucune intégration de fiche Google Business Profile ni nouvelle mention RGE
n'a été ajoutée, conformément à la réponse du propriétaire. Le logo existant
a été conservé à sa demande.

Données personnelles
--------------------
Appliquer la conservation annoncée : purger dans Netlify Forms et la boîte
Outlook les demandes sans suite après trois ans depuis le dernier échange,
et retirer plus tôt les pièces jointes devenues inutiles. La suppression
n'est pas automatique dans cette version. Limiter les accès aux dossiers.
Faire contrôler les mentions légales en cas de changement de représentant,
de capital ou d'immatriculation. Identification vérifiée le 3 novembre 2026
sur https://www.societe.com/societe/egar-410287189.html.

Photos
------
La galerie et les nouvelles pages utilisent les photos de réalisations EGAR
reprises de https://egarbtp.fr/realisations. Les illustrations déjà présentes
sur les cartes de l'accueil sont conservées et identifiées par leurs crédits.
Aucune nouvelle photo générique et aucun avis client n'ont été ajoutés.
