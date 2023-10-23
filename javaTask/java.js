//shuffle the array 

public static void shuffleArray(int[] arr) {
    Random random = new Random();

    for (int i = arr.length - 1; i > 0; i--) {
        int j = random.nextInt(i + 1);

        // Swap arr[i] and arr[j]
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

//roaman number to integer

public static int romanToInt(String s) {
    HashMap<Character, Integer> romanValues = new HashMap<>();
    romanValues.put('I', 1);
    romanValues.put('V', 5);
    romanValues.put('X', 10);
    romanValues.put('L', 50);
    romanValues.put('C', 100);
    romanValues.put('D', 500);
    romanValues.put('M', 1000);

    int result = 0;
    int previousValue = 0;

    for (int i = s.length() - 1; i >= 0; i--) {
        char currentChar = s.charAt(i);
        int currentValue = romanValues.get(currentChar);

        if (currentValue < previousValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }

        previousValue = currentValue;
    }

    return result;
}

//panagram or not
public static boolean isPangram(String sentence) {
    sentence = sentence.toLowerCase(); // Convert to lowercase for case insensitivity
    boolean[] alphabetPresent = new boolean[26];

    for (int i = 0; i < sentence.length(); i++) {
        char c = sentence.charAt(i);

        if ('a' <= c && c <= 'z') {
            int index = c - 'a';
            alphabetPresent[index] = true;
        }
    }

    for (boolean present : alphabetPresent) {
        if (!present) {
            return false; // If any letter is not present, it's not a pangram
        }
    }

    return true; // All letters are present, it's a pangram
}