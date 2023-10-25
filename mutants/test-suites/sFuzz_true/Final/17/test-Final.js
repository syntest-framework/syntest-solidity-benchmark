const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringdfpaxwc = "khU1vOuDozhKtDQNYPDeCxPwA1R"
		const stringNZhuaFs = "WHv2MIdt4Ssmoj2zp2TTL9eXs1g8KePeAb"
		const uintZX5ncGC = BigInt("40")
		const FinalOt3eYIg = await Final.new(stringdfpaxwc, stringNZhuaFs, uintZX5ncGC, {from: accounts[2]});
		const uintUTgkHtj = BigInt("280")
		const addressHWjcam = "0x0000000000000000000000000000000000000001"
		const uintukoDDQO = BigInt("1899")
		const addressNCBQfEM = accounts[4]
		const addresslMd3Qci = accounts[4]
		const uinteoRfX0S = BigInt("1080")
		const addressUqH9Sxl = accounts[3]
		const addresswMj09tE = accounts[0]
		const addressTp5Cg9E = "0x0000000000000000000000000000000000000001"
//		const booln3qgLP = await FinalOt3eYIg.transfer.call(addressHWjcam, uintUTgkHtj, {from: "0x0000000000000000000000000000000000000001"});
//		const boolf0DZyPq = await FinalOt3eYIg.transferFrom.call(addresslMd3Qci, addressNCBQfEM, uintukoDDQO, {from: accounts[2]});
//		const boolt8I6COA = await FinalOt3eYIg.transfer.call(addressUqH9Sxl, uinteoRfX0S, {from: accounts[4]});
//		const uintLZTL1cT = await FinalOt3eYIg.allowance.call(addressTp5Cg9E, addresswMj09tE, {from: accounts[3]});

		await expect(FinalOt3eYIg.transfer.call(addressHWjcam, uintUTgkHtj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringTbTkag = "V1PuPlNRWPPJJkcLxb7oGHY7LGjT8WovlQG8BO4Ib0mB"
		const stringKrnVPFB = "z9KLccR9HtdicJHVXWYE3uy2ojTKRqGOol1yIlxwPhXnUjP24AdmazLRmtogUNeMV3XL3FnSOLAzfi5r22Ga5"
		const uintW9f0LEn = BigInt("63")
		const Final8g4YQg = await Final.new(stringTbTkag, stringKrnVPFB, uintW9f0LEn, {from: accounts[0]});
		const uintsWRzgKJ = BigInt("396")
		const addressrBZfzAq = accounts[4]
		const addressPl4f9e9 = accounts[4]
		const uintU4IQPBC = BigInt("456")
		const addressPAM3Td = accounts[2]
		const uintq1z8p06 = BigInt("1882")
		const addresstUonnj7 = accounts[2]
		const addresslQ8KgrB = accounts[1]
//		const boolNqZpifm = await Final8g4YQg.transferFrom.call(addressPl4f9e9, addressrBZfzAq, uintsWRzgKJ, {from: accounts[1]});
//		const boolleVK6Tp = await Final8g4YQg.increaseAllowance.call(addressPAM3Td, uintU4IQPBC, {from: accounts[0]});
//		const boolgXZHH8d = await Final8g4YQg.transferFrom.call(addresslQ8KgrB, addresstUonnj7, uintq1z8p06, {from: accounts[1]});

		await expect(Final8g4YQg.transferFrom.call(addressPl4f9e9, addressrBZfzAq, uintsWRzgKJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringBrGZU3c = "5Gb3jhBgdkiIJ3"
		const stringAmRgnew = "j5NxyRIkP"
		const uintCqJwYqj = BigInt("89")
		const FinalvKcL3SL = await Final.new(stringBrGZU3c, stringAmRgnew, uintCqJwYqj, {from: accounts[3]});
		const addressYaCeDDD = "0x0000000000000000000000000000000000000001"
		const addressriaavr = accounts[4]
		const addressE1XFhCV = accounts[5]
		const uintbedCFBJ = BigInt("754")
		const addresst6tlA3M = accounts[5]
		const uintUWsXjN = await FinalvKcL3SL.allowance.call(addressriaavr, addressYaCeDDD, {from: accounts[1]});
		const uintfw4W6bE = await FinalvKcL3SL.balanceOf.call(addressE1XFhCV, {from: "0x0000000000000000000000000000000000000001"});
		const boolGKad1FR = await FinalvKcL3SL.approve.call(addresst6tlA3M, uintbedCFBJ, {from: accounts[4]});

		assert.equal(boolGKad1FR, true)
		assert.equal(uintUWsXjN, BigInt("0"))
		assert.equal(uintfw4W6bE, BigInt("0"))
	});

	it('test for Final', async () => {
		const stringuMyPJCZ = "qKRKqxT3"
		const stringrC3ru4o = "CNKCbyIHOWqwb5a52JVtrEPpdkgNPcmMEFSFriQKvTrfNxtIS3rx9uGRDON8rsYN6x8wvi3SyOQZkXSxybsf"
		const uintPiqyfFK = BigInt("117")
		const FinalDUSR6fF = await Final.new(stringuMyPJCZ, stringrC3ru4o, uintPiqyfFK, {from: "0x0000000000000000000000000000000000000001"});
		const uintEA2BMc8 = BigInt("837")
		const addressFB8v8SV = accounts[0]
		const uintsK2ICZd = BigInt("776")
		const addressTNyiCZt = accounts[1]
		const boolm3DzZjy = await FinalDUSR6fF.transfer.call(addressFB8v8SV, uintEA2BMc8, {from: "0x0000000000000000000000000000000000000001"});
		const stringAs4x6C = await FinalDUSR6fF.symbol.call({from: accounts[1]});
		const bool8JMrRo = await FinalDUSR6fF.approveAndCall.call(addressTNyiCZt, uintsK2ICZd, {from: accounts[0]});
	});

	it('test for Final', async () => {
		const stringzEMQtE4 = "XXQzlaxd25wVaxzLv7gFxwq8t7qDii1pJFLLw5YKKwb1aXgDVpLCYgJYDuFo9btvQ1wQWYrgZPlY3XXkfm5HUvDtpEL2S8"
		const stringOadqxuC = "4CR12SxIp7C5IKj2O6BNgSioAF0NLMavg0QHpifU48G"
		const uintXi36xta = BigInt("50")
		const FinalfORKklP = await Final.new(stringzEMQtE4, stringOadqxuC, uintXi36xta, {from: accounts[0]});
		const uintBl49C6U = BigInt("516")
		const addressO1boDk = accounts[1]
		const uintUJXfUSB = BigInt("362")
		const addressNNgwqfI = accounts[5]
		const uintn6BuN8b = BigInt("1572")
		const addressaTsRqc8 = accounts[4]
//		const boolGmOmNKb = await FinalfORKklP.approveAndCall.call(addressO1boDk, uintBl49C6U, {from: accounts[2]});
//		const boolBejDwcZ = await FinalfORKklP.transfer.call(addressNNgwqfI, uintUJXfUSB, {from: accounts[2]});
//		const boollZP3XJ2 = await FinalfORKklP.transfer.call(addressaTsRqc8, uintn6BuN8b, {from: accounts[5]});
//		const uint8dQfqJwG = await FinalfORKklP.decimals.call({from: accounts[0]});

		await expect(FinalfORKklP.approveAndCall.call(addressO1boDk, uintBl49C6U, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringo3wUFYo = "tr3rTaqnqeH4TmtYf7sbZmEnO5Lf69Ne3eQxASDNTZ5tgQsAC4YXKlOmyxoUpea2H5p"
		const stringKgJxidI = "ihrWqGVCFxcp1oVoWy2KvqQYEK3aNAd6UBXKkhAXsp5H2SzX51whqjv"
		const uintNuQbs16 = BigInt("171")
		const FinalehCClc0 = await Final.new(stringo3wUFYo, stringKgJxidI, uintNuQbs16, {from: accounts[1]});
		const uintCeMh6B9 = BigInt("1145")
		const addressNrMlcLy = accounts[5]
		const uintNxkVaJq = BigInt("1977")
		const addressRjcsy0E = accounts[5]
		const addresswnw0w7c = accounts[1]
//		const boolOQtmOJm = await FinalehCClc0.increaseAllowance.call(addressNrMlcLy, uintCeMh6B9, {from: accounts[0]});
//		const boolMSTOpM1 = await FinalehCClc0.transferFrom.call(addresswnw0w7c, addressRjcsy0E, uintNxkVaJq, {from: accounts[4]});

		await expect(FinalehCClc0.increaseAllowance.call(addressNrMlcLy, uintCeMh6B9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringcNfjRy = "KDaWHSGd67hmyWVnVQiqpSoNPMDRlnVDNggfH8WnTbsI4tVGDrdicugxp8AOsPxDyFvNCSgN"
		const stringMLjP649 = "drYX3TY1rEljIpSSNZrzSDaBg1X9LYTcJQH4HDg8RPrjQhB"
		const uintlHVVgwd = BigInt("1739")
		const FinalAAN9TWk = await Final.new(stringcNfjRy, stringMLjP649, uintlHVVgwd, {from: accounts[4]});
		const uintcSOKeio = BigInt("1987")
		const addressmd1SfS8 = accounts[4]
		const uintDvRyhIn = BigInt("737")
		const addressDoDJv8 = accounts[1]
		const addressEo40HiI = "0x0000000000000000000000000000000000000001"
		const uintFFvvMIt = BigInt("1071")
		const addressrY6Bzc = accounts[3]
		const addressG47Hj0 = accounts[4]
//		const boolOjNDxb = await FinalAAN9TWk.transfer.call(addressmd1SfS8, uintcSOKeio, {from: accounts[2]});
//		const boolEvaNTcc = await FinalAAN9TWk.decreaseAllowance.call(addressDoDJv8, uintDvRyhIn, {from: accounts[2]});
//		const uintCbxp1tb = await FinalAAN9TWk.balanceOf.call(addressEo40HiI, {from: accounts[1]});
//		const uint8zD9rElP = await FinalAAN9TWk.decimals.call({from: accounts[4]});
//		const boolxUAhWNy = await FinalAAN9TWk.transferFrom.call(addressG47Hj0, addressrY6Bzc, uintFFvvMIt, {from: accounts[2]});
//		const string5gi1Qq = await FinalAAN9TWk.name.call({from: accounts[2]});

		await expect(FinalAAN9TWk.transfer.call(addressmd1SfS8, uintcSOKeio, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringAe86LXo = "Sen3G7vw"
		const stringacpcwOs = "yn2Bfknl4AGHJvLOoZHvrPc4tcRmFrMfsEM4tbVhc8pJum1"
		const uintkdgjvRo = BigInt("324")
		const FinalkMbzZw0 = await Final.new(stringAe86LXo, stringacpcwOs, uintkdgjvRo, {from: accounts[0]});
		const addressc7VrMBM = accounts[5]
		const addressp3PDffX = accounts[0]
		const addresscUf6afn = accounts[1]
		const addressflW6buS = accounts[0]
		const addressq3ZoZsO = "0x0000000000000000000000000000000000000001"
		const uintiIM0wk7 = await FinalkMbzZw0.allowance.call(addressp3PDffX, addressc7VrMBM, {from: accounts[3]});
		const booloSEtDE8 = await FinalkMbzZw0.transferownership.call(addresscUf6afn, {from: accounts[0]});
		const uinta18K4Cf = await FinalkMbzZw0.allowance.call(addressq3ZoZsO, addressflW6buS, {from: accounts[4]});
		const stringsETT5cm = await FinalkMbzZw0.symbol.call({from: accounts[3]});

		assert.equal(booloSEtDE8, true)
		assert.equal(stringsETT5cm, "yn2Bfknl4AGHJvLOoZHvrPc4tcRmFrMfsEM4tbVhc8pJum1")
		assert.equal(uinta18K4Cf, BigInt("0"))
		assert.equal(uintiIM0wk7, BigInt("0"))
	});

	it('test for Final', async () => {
		const stringMSFAzv = "xHeUEdgaB5bv5YljOQhGJTDSQ3XLUzi3KTJw3nGevpGCWHi5jRfWn8egL6dIcJEgJoV"
		const stringsagvoXi = "egj"
		const uintsEZz7sc = BigInt("41")
		const FinaldHUJJiU = await Final.new(stringMSFAzv, stringsagvoXi, uintsEZz7sc, {from: accounts[3]});
		const uintHdafGWf = BigInt("948")
		const addressNRzQ8eG = accounts[0]
		const uintRF7r6qS = BigInt("51")
		const addressADZ4NpR = accounts[4]
		const address00HWlI = accounts[7]
		const boolDjhoAlh = await FinaldHUJJiU.approveAndCall.call(addressNRzQ8eG, uintHdafGWf, {from: accounts[3]});
//		const boolkw1VFES = await FinaldHUJJiU.transferFrom.call(address00HWlI, addressADZ4NpR, uintRF7r6qS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolDjhoAlh, true)
		await expect(FinaldHUJJiU.transferFrom.call(address00HWlI, addressADZ4NpR, uintRF7r6qS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringMSFAzv = "xHeUEdgaB5bv5YljOQhGJTDSQ3XLUzi3KTJw3nGevpGCWHi5jRfWn8egL6dIcJEgJoV"
		const stringsagvoXi = "egj"
		const uintJgM4IbS = BigInt("41")
		const FinaldHUJJiU = await Final.new(stringMSFAzv, stringsagvoXi, uintJgM4IbS, {from: accounts[3]});
		const uintaidpRQa = BigInt("0")
		const addressVl986Fb = accounts[5]
		const addressemcDNkU = accounts[6]
		const addressJqgqhb3 = accounts[3]
		const addressvtWkdKD = accounts[4]
		const uintZt09fTW = BigInt("974")
		const addressuZcuKK = accounts[4]
		const uintLKPsG7k = BigInt("1817")
		const addressf74QjfV = accounts[3]
		const addressu1ploZm = accounts[1]
		const boolkw1VFES = await FinaldHUJJiU.transferFrom.call(addressemcDNkU, addressVl986Fb, uintaidpRQa, {from: "0x0000000000000000000000000000000000000001"});
		const uintAUnKTgg = await FinaldHUJJiU.allowance.call(addressvtWkdKD, addressJqgqhb3, {from: accounts[0]});
//		const boolSGhUquz = await FinaldHUJJiU.approveAndCall.call(addressuZcuKK, uintZt09fTW, {from: accounts[4]});
//		const boolVAkQpaA = await FinaldHUJJiU.transferFrom.call(addressu1ploZm, addressf74QjfV, uintLKPsG7k, {from: accounts[1]});

		assert.equal(boolkw1VFES, true)
		assert.equal(uintAUnKTgg, BigInt("0"))
		await expect(FinaldHUJJiU.approveAndCall.call(addressuZcuKK, uintZt09fTW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})