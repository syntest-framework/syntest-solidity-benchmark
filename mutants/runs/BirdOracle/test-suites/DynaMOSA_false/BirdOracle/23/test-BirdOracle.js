const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOraclekYYtvJ0 = await BirdOracle.new({from: accounts[4]});
		const stringRDbdUcq = "UmE5rbsKzL4qUibT0KaeOL8CGb9uehSYCgsowKiq"
		const uintUv36gLh = BigInt("909")
		const uintcSKZLFA = BigInt("1364")
		const stringKA6TYWO = "k54HPCJ4fmg8VlPWK5oZ"
		const uintzjDr1sX = BigInt("882")
		const stringPOFa2M0 = "5kaGXdLy6lSfSTUnBD8azrVXiveMfxGM6QyKytRKkvWfvmmW1xXEFNtgv8KIHe"
		const addressNXYZFCt = accounts[1]
		const addressY9R3xQk = await BirdOraclekYYtvJ0.parseAddr.call(stringRDbdUcq, {from: accounts[4]});
		const uintu6bXLy9 = await BirdOraclekYYtvJ0.getRating.call({from: accounts[5]});
		const uintB10DyWO = await BirdOraclekYYtvJ0.getRating.call({from: accounts[1]});
		const stringFDvW2Me = await BirdOraclekYYtvJ0.substring.call(stringKA6TYWO, uintcSKZLFA, uintUv36gLh, {from: accounts[0]});
		const stringmgFlgP = await BirdOraclekYYtvJ0.substring.call(stringPOFa2M0, uintzjDr1sX, {from: "0x0000000000000000000000000000000000000001"});
		const uintx1REfhH = await BirdOraclekYYtvJ0.getRatingByAddress.call(addressNXYZFCt, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleecNotZO = await BirdOracle.new({from: accounts[2]});
		const uintYTOk3zC = BigInt("339")
		const uintzwhSuvU = BigInt("54")
		const stringyPXrOsx = "W7NnqmFSyqwnOFRlNFr22ezoB59boMD09RclUJGk"
		const stringsRPuNAi = "UHUIJVsecFzlvOfNPv9zkCNar4OWorK5cn"
		const uintfxpn03T = await BirdOracleecNotZO.getRating.call({from: accounts[0]});
		const stringrbdcZru = await BirdOracleecNotZO.substring.call(stringyPXrOsx, uintzwhSuvU, uintYTOk3zC, {from: accounts[4]});
		const uintzB1XEON = await BirdOracleecNotZO.getRatingByAddressString.call(stringsRPuNAi, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleH36RGwb = await BirdOracle.new({from: accounts[0]});
		const stringcqNx5Ly = "6VF97dKwxsU67REiv44Etcc2eMph5JPtrl3vpDe6DRPEAimuOKQQRadlU9Y5RXuOfqiTgbjZ1Yb7gvn8qtsrwL"
		const uintV0hOu8o = BigInt("1647")
		const stringyeD80xb = "L6euIEQ1nREGjJi8jHU7w508SG7oLFowO3nJe6ygLhAmGMRbRdPJBSjQ7UapUAlevcLPBl8DLf7UYuDsuwA"
		const uintnyF9EWT = await BirdOracleH36RGwb.getRatingByAddressString.call(stringcqNx5Ly, {from: accounts[2]});
		const stringxzmJAuf = await BirdOracleH36RGwb.substring.call(stringyeD80xb, uintV0hOu8o, {from: accounts[1]});
		const uintAFqWSN0 = await BirdOracleH36RGwb.getRating.call({from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclewgPn2Bm = await BirdOracle.new({from: accounts[4]});
		const stringRnEkln2 = "OVQdEte8D11sTu5kkwyY5aqIr7irKBHc3xFoyR7x0uSWF2AvNICuYH0BH0"
		const addressovaiatU = accounts[5]
		const stringk5FkMPP = await BirdOraclewgPn2Bm.extractAddress.call(stringRnEkln2, {from: accounts[0]});
		const uintrRltR0y = await BirdOraclewgPn2Bm.getRatingByAddress.call(addressovaiatU, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleFEr3mum = await BirdOracle.new({from: accounts[4]});
		const uintG7SSIEK = BigInt("832")
		const uintggezojw = BigInt("860")
		const stringl8BPkFB = "cWnTw2"
		const stringLzIADO = "vzHSjl89nJtJRHmu6glrsBJE9"
		const string1lHeaC = await BirdOracleFEr3mum.substring.call(stringl8BPkFB, uintggezojw, uintG7SSIEK, {from: accounts[1]});
		const stringpDgV8Ra = await BirdOracleFEr3mum.extractAddress.call(stringLzIADO, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclelUGDsr = await BirdOracle.new({from: accounts[4]});
		const uintvEusAuT = BigInt("1376")
		const stringSLdRBa8 = "FzVitaWPyEknvn5wkvMv7wh6V1p0TDtva84ah5X7SO5zFH7PzmgoqYcrCLpijLsepD2dZMrXqilDAH"
		const stringLT1mEIi = "DVcIm1v7LPU9lkHQcmBtiv2el4AIN4HKcYb9kdIUyvtAjdALUxM2qD9xpKSEWQGib8wCtOVKkMfVRDVQTktE5"
		const stringBWc6vCp = "8i9ivAsve"
		const stringkXfHZoH = "hrsdAGYqXbFWDrFvw8GCpbNnAPOiBvw6TRGfvq6wRiu2lwvWfqdvjUpDvjlrk0W6U0txtWPzU"
		const stringHDGoz4f = "mhmhp9H8iIMgHptrs3F5HaESTiHOB"
		const stringJbAUff = "wrxwDb4dN28IOYF58cBT2Y"
		const stringfGAShSo = await BirdOraclelUGDsr.substring.call(stringSLdRBa8, uintvEusAuT, {from: accounts[2]});
		const addresslXPHBPD = await BirdOraclelUGDsr.parseAddr.call(stringLT1mEIi, {from: accounts[2]});
		const stringzXSZOfj = await BirdOraclelUGDsr.extractAddress.call(stringBWc6vCp, {from: accounts[4]});
		const stringoKTksSA = await BirdOraclelUGDsr.extractAddress.call(stringkXfHZoH, {from: accounts[3]});
		const 
PCUayk6 = await BirdOraclelUGDsr.newChainRequest.call(stringJbAUff, stringHDGoz4f, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclejIMSgiO = await BirdOracle.new({from: accounts[2]});
		const stringQBtu3Wk = "1TVs8jAuutb4eBBqsFCpqnbmH9GTmlkJYNDI6QbrzEoR9Cb6qRBEFRubp86OsAhkuF83K17HBw4L2MMHDVmzTeq7M"
		const addressTk51KuV = accounts[2]
		const stringmaXRnGU = "fRPtbVYgm4oKKz3gPPwmXWq8mrusL259Mi0ime"
		const stringelCmNGl = "fifVAma8GECtXXP6NWYIGkQC91SK97IMqmFchNCPBY3w8xPvixkYpAoQVChxnnUGaVqhN"
		const addressKej2TMe = accounts[3]
		const addressRr5fXor = await BirdOraclejIMSgiO.parseAddr.call(stringQBtu3Wk, {from: accounts[3]});
		const uintkNyeHfN = await BirdOraclejIMSgiO.getRatingByAddress.call(addressTk51KuV, {from: accounts[1]});
		const uintxYXx1zi = await BirdOraclejIMSgiO.getRatingByAddressString.call(stringmaXRnGU, {from: accounts[3]});
		const stringAVSsa9v = await BirdOraclejIMSgiO.extractAddress.call(stringelCmNGl, {from: accounts[1]});
		const uintHSUiiMF = await BirdOraclejIMSgiO.getRatingByAddress.call(addressKej2TMe, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleFEr3mum = await BirdOracle.new({from: accounts[4]});
		const uintBCyfXsy = BigInt("775")
		const stringhYM8Vqe = "teJuRw5NbY3v6"
		const stringLzIADO = "vzHSjl89nJtJRHmu6glrsBJE9"
		const stringJQaUYa = await BirdOracleFEr3mum.substring.call(stringhYM8Vqe, uintBCyfXsy, {from: accounts[4]});
		const stringpDgV8Ra = await BirdOracleFEr3mum.extractAddress.call(stringLzIADO, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleecNotZO = await BirdOracle.new({from: accounts[2]});
		const uintfa20LO = BigInt("541")
		const stringj2TRE73 = "LkpVti5uqzfXbk3tahVONpfHJTyiBy2GVC2kvaNzbSWNKxcAY7tLoY6HPVLAjb4p1hmLoiUzM"
		const uintgoZZz8 = BigInt("314")
		const stringPgdhbKQ = "uTc5qZbHT9qJOO8GPMMAcf5bzbO"
		const uintRG0S0vi = BigInt("476")
		const uinteRx6Ums = BigInt("248")
		const stringlmImM2t = "gLLN40Ta3yeW2yNbMVCGZLb6jiGuFlIOss"
		const uintu91CqCQ = BigInt("339")
		const uint0q9Bh2 = BigInt("54")
		const stringyPXrOsx = "W7NnqmFSyqwnOFRlNFr22ezoB59boMD09RclUJGk"
		const stringsRPuNAi = "UHUIJVsecFzlvOfNPv9zkCNar4OWorK5cn"
		const uintfxpn03T = await BirdOracleecNotZO.getRating.call({from: accounts[0]});
		const stringmgTuzYk = await BirdOracleecNotZO.substring.call(stringj2TRE73, uintfa20LO, {from: accounts[0]});
		const stringLFqjCGu = await BirdOracleecNotZO.substring.call(stringPgdhbKQ, uintgoZZz8, {from: accounts[0]});
		const stringml4wTO = await BirdOracleecNotZO.substring.call(stringlmImM2t, uinteRx6Ums, uintRG0S0vi, {from: accounts[1]});
		const stringrbdcZru = await BirdOracleecNotZO.substring.call(stringyPXrOsx, uint0q9Bh2, uintu91CqCQ, {from: accounts[4]});
		const uintzB1XEON = await BirdOracleecNotZO.getRatingByAddressString.call(stringsRPuNAi, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleecNotZO = await BirdOracle.new({from: accounts[2]});
		const uintcSi37gY = BigInt("35")
		const stringMswOKCI = "7qD2hTuIAA5VdqDTRhTdWEdYm6V71Dj1Z9VQXj"
		const stringJNvIzKa = "4Tfp2tmYDXlB"
		const uintd7ul7iL = BigInt("339")
		const uintOfLYgir = BigInt("54")
		const stringyPXrOsx = "W7NnqmFSyqwnOFRlNFr22ezoB59boMD09RclUJGk"
		const stringRHsDCTW = await BirdOracleecNotZO.substring.call(stringMswOKCI, uintcSi37gY, {from: accounts[3]});
		const addressQmCdCi1 = await BirdOracleecNotZO.parseAddr.call(stringJNvIzKa, {from: accounts[1]});
		const uintfxpn03T = await BirdOracleecNotZO.getRating.call({from: accounts[0]});
		const stringrbdcZru = await BirdOracleecNotZO.substring.call(stringyPXrOsx, uintOfLYgir, uintd7ul7iL, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracledKp3UBK = await BirdOracle.new({from: accounts[0]});
		const stringYjRUPko = "WLdV16xR4MnA7KsgYhzIAwXC2t4rH5j8kyGyKx7MHsRn2jLKZ8oneOJUkmf9vL688PgD799sf4lxGzAiM9lhCHNK3AZd9nll"
		const stringFRjrgV = "qq"
		const stringsmf6Mib = "WSUihDbjrwb7cNJ5BdXvOSeyJrGcLbUteHPb9e5jmBckWwsyI8GRPLSIMzyEdUCLtmxlWI9UyBDiUJveCR6en6YovIOmbttoEd"
		const addressHkndlXU = accounts[1]
		const uintBBT6Izn = BigInt("206")
		const uintivEcprf = BigInt("1069")
		const stringX4K6Hm0 = "FVBGAyKUCvutXL9e1X8t4fjj33WUV0Mpc6dJGvVn2TONshP1bp7V68UFlWuQgqzTSc9bvuW6dEn6z"
		const uintlPrwJaO = await BirdOracledKp3UBK.getRatingByAddressString.call(stringYjRUPko, {from: accounts[1]});
		const 
WZOl5a1 = await BirdOracledKp3UBK.newChainRequest.call(stringsmf6Mib, stringFRjrgV, {from: accounts[4]});
		const uintnRsQzq4 = await BirdOracledKp3UBK.getRatingByAddress.call(addressHkndlXU, {from: accounts[1]});
		const stringqsqGX6B = await BirdOracledKp3UBK.substring.call(stringX4K6Hm0, uintivEcprf, uintBBT6Izn, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleecNotZO = await BirdOracle.new({from: accounts[2]});
		const uintMeRFVdP = BigInt("1003")
		const uintMMaHWLk = BigInt("1072")
		const uintDQxvTWf = BigInt("348")
		const uintU0d20D9 = BigInt("1899")
		const stringPD7moc = "CVJJOI1bhcjpaLVqzB82lTUp3azu7k1P5MhPc3glC4J"
		const uintfxpn03T = await BirdOracleecNotZO.getRating.call({from: accounts[0]});
		const uintyQRrEdW = await BirdOracleecNotZO.getRating.call({from: accounts[4]});
		const 
W3EOtzm = await BirdOracleecNotZO.updatedChainRequest.call(uintMMaHWLk, uintMeRFVdP, {from: accounts[3]});
		const stringR0bpkrq = await BirdOracleecNotZO.substring.call(stringPD7moc, uintU0d20D9, uintDQxvTWf, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclewgPn2Bm = await BirdOracle.new({from: accounts[4]});
		const stringQFSAtDb = "rP8l2g17lXwT1KipIoKEABU0OVlJkbR4e3Ko8mPnfO6gKSQIgnlcmC6XtOJ7Zw6eq9aSAqaj6kc29IqLE9B2TCAj6KeWtnwL"
		const uintAzFydCr = BigInt("827")
		const stringjM5KNm6 = "1XE4MfziEFvXlstu9qQo1RGzoYmiq4PuKHZ88hXa3aFbtGhYMBLvhr9vVlEQXeub5kGwq7BO3eUS"
		const stringRnEkln2 = "OVQdEte8D11sTu5kkwyY5aqIr7irKBHc3xFyR7x0uSWF2AvNICuYH0BH0"
		const uintCr3Oazr = await BirdOraclewgPn2Bm.getRatingByAddressString.call(stringQFSAtDb, {from: accounts[4]});
		const stringn05idk2 = await BirdOraclewgPn2Bm.substring.call(stringjM5KNm6, uintAzFydCr, {from: "0x0000000000000000000000000000000000000001"});
		const stringk5FkMPP = await BirdOraclewgPn2Bm.extractAddress.call(stringRnEkln2, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclePrSIrF4 = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const stringkP8VydE = "tuU8E96UsEm1SPCKNPORQGo9cX697dmEO3DiuDP4T28mbAZH9fYZyBczoGbT55AT9jOkqYJO6v6CiPOnk8U6twO7x6f4"
		const uintVXqWz4 = BigInt("1552")
		const uints1lNHw6 = BigInt("1440")
		const addressOrYc3Qk = accounts[2]
		const uintO172jph = BigInt("322")
		const uintZORiyjV = BigInt("1237")
		const addressTuUuKne = accounts[3]
		const stringoTFX20B = await BirdOraclePrSIrF4.extractAddress.call(stringkP8VydE, {from: accounts[0]});
		const 
xz1VvXm = await BirdOraclePrSIrF4.updatedChainRequest.call(uints1lNHw6, uintVXqWz4, {from: accounts[1]});
		const uintKH0lxWZ = await BirdOraclePrSIrF4.getRatingByAddress.call(addressOrYc3Qk, {from: "0x0000000000000000000000000000000000000001"});
		const 
uzUArl = await BirdOraclePrSIrF4.updatedChainRequest.call(uintZORiyjV, uintO172jph, {from: accounts[4]});
		const uintF90u9Uj = await BirdOraclePrSIrF4.getRatingByAddress.call(addressTuUuKne, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclewgPn2Bm = await BirdOracle.new({from: accounts[4]});
		const uintcSpzJmN = BigInt("599")
		const stringYGWM7EJ = "R9HdEL4wGkRtS7Lr8Tpu952n"
		const stringRnEkln2 = "OVQdEte8D11sTu5kkwyY5aqIr7irKBHc3xFoyR7x0uSWF2AvGICuYH0BH0"
		const stringniLTKPB = await BirdOraclewgPn2Bm.substring.call(stringYGWM7EJ, uintcSpzJmN, {from: accounts[5]});
		const uintIzWB3T2 = await BirdOraclewgPn2Bm.getRating.call({from: accounts[4]});
		const stringk5FkMPP = await BirdOraclewgPn2Bm.extractAddress.call(stringRnEkln2, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclerNL6JeV = await BirdOracle.new({from: accounts[3]});
		const uintKlnuvVG = BigInt("1177")
		const uintCjYorCc = BigInt("1177")
		const stringjP8VrLb = "nfJkdtJkYpIdp9cCdOavBaAym5ZC2eHexk1VEUaMmTqq"
		const stringww0iIa = "bPcdwlQuJ9vXPMDk9L8huie1T"
		const stringLOKQ89 = "qU"
		const addressuTi0u3u = accounts[2]
		const uintgPnr5sR = BigInt("1552")
		const stringmGJpE1R = "nFyEWkH6d4rJSFf7zmMdPo7TyS5AYWJx8oq3ffOFrzQ7QAdHch"
		const stringlCjv35B = await BirdOraclerNL6JeV.substring.call(stringjP8VrLb, uintCjYorCc, uintKlnuvVG, {from: accounts[1]});
		const 
tEhaW02 = await BirdOraclerNL6JeV.newChainRequest.call(stringLOKQ89, stringww0iIa, {from: accounts[2]});
		const uintn3FvW6Q = await BirdOraclerNL6JeV.getRatingByAddress.call(addressuTi0u3u, {from: "0x0000000000000000000000000000000000000001"});
		const stringqrbDpEo = await BirdOraclerNL6JeV.substring.call(stringmGJpE1R, uintgPnr5sR, {from: accounts[4]});
	});
})