import java.util.*;
import Frame;

enum Age {
    TODDLER, CHILD, TEEN, ADULT
}

enum Gender {
    MALE, FEMALE, OTHER
}

enum Race {
    AMERICAN_INDIAN, WHITE, BLACK, ASIAN, PACIFIC_ISLANDER, LATIN_SPANISH
}


public class Story {
    
    private @Id @GeneratedValue Long id;
    private List<Frame> pages;
    private Age age;
    private Gender gender;
    private Race race;
    private String procedure;

    public Story(List<Frame> pages, Age age, Gender gender, Race race, Sting procedure) {
        this.pages = pages;
        this.age = age;
        this.gender = gender;
        this.race = race;
        this.procedure = procedure;
    }

    public Age getAge() {
        return age;
    }

    public void setAge(Age age) {
        this.age = age;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public Race getRace() {
        return race;
    }

    public void setRace(Race race) {
        this.race = race;
    }

    public String getProcedure() {
        return procedure;
    }

    public void setProcedure(String procedure) {
        this.procedure = procedure;
    }
}
