const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintkmOu4rn = BigInt("690")
		const stringVQXYsA = "cMRd927pdr9qamfGyGoMvLYA5NmyMdBXaJCUzMax6x75"
		const stringzZosrzE = "GpEf5s"
		const uintqjjr0Av = BigInt("583")
		const ANRXTokenVMjeW95 = await ANRXToken.new(uintkmOu4rn, stringVQXYsA, stringzZosrzE, uintqjjr0Av, {from: accounts[4]});
		const uint2Oa7zs = BigInt("830")
		const addressyn4pHDO = accounts[1]
		const addressXOWJRIG = accounts[2]
		const address4QqwKw = "0x0000000000000000000000000000000000000001"
		const addressWXsIRFO = accounts[2]
		const boolWCdUxDI = await ANRXTokenVMjeW95.approve.call(addressyn4pHDO, uint2Oa7zs, {from: accounts[1]});
		const uintaYHyE1I = await ANRXTokenVMjeW95.totalSupply.call({from: accounts[5]});
//		const addressqfu4wtu = await ANRXTokenVMjeW95.deprecate.call(addressXOWJRIG, {from: accounts[5]});
//		const uintRRTmN4S = await ANRXTokenVMjeW95.allowance.call(addressWXsIRFO, address4QqwKw, {from: accounts[0]});

		assert.equal(boolWCdUxDI, true)
		assert.equal(uintaYHyE1I, BigInt("690"))
		await expect(ANRXTokenVMjeW95.deprecate.call(addressXOWJRIG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintzWCdELl = BigInt("49")
		const stringYnjFKzC = "RExVOvsTtVRPJAtR219pXCYOOVJykuMq"
		const stringc72m5d = "tgBrtLB775AoBlyGQe3C2A5skqUZocTimcoYd5hvb9N52g2x6Oy5n7PiN7pn45hTcEhn8xIFG3tW6"
		const uintDZECsQO = BigInt("190")
		const ANRXTokenO9DV9Hw = await ANRXToken.new(uintzWCdELl, stringYnjFKzC, stringc72m5d, uintDZECsQO, {from: accounts[1]});
		const uintbQjq7N8 = BigInt("1846")
		const addressHdlV5rf = accounts[3]
		const uintcbhtzdo = BigInt("1223")
		const uintf1j7xHb = BigInt("1527")
		const addressUM6r3p8 = accounts[2]
		const uintI0xVQ8 = BigInt("1861")
//		const boolu9jlfVT = await ANRXTokenO9DV9Hw.transfer.call(addressHdlV5rf, uintbQjq7N8, {from: accounts[5]});
//		const uint1HM5pY = await ANRXTokenO9DV9Hw.totalSupply.call({from: accounts[3]});
//		const uintakA0Ujc = await ANRXTokenO9DV9Hw.setParams.call(uintf1j7xHb, uintcbhtzdo, {from: accounts[1]});
//		const addressyoyqCEB = await ANRXTokenO9DV9Hw.deprecate.call(addressUM6r3p8, {from: accounts[0]});
//		const uintlexwcBG = await ANRXTokenO9DV9Hw.redeem.call(uintI0xVQ8, {from: accounts[3]});

		await expect(ANRXTokenO9DV9Hw.transfer.call(addressHdlV5rf, uintbQjq7N8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintg7xnYB = BigInt("2044")
		const stringghRc8h = "xmglJLUmiDDBINB2RDepP1RwfTjOsVDfQNyiTdJ"
		const stringwLnrdF2 = "zMCWlyVMlCdg8X7qOmmvphYSujej"
		const uintZUk0iho = BigInt("1856")
		const ANRXTokenLFBoMEe = await ANRXToken.new(uintg7xnYB, stringghRc8h, stringwLnrdF2, uintZUk0iho, {from: accounts[1]});
		const addressC9guzAy = "0x0000000000000000000000000000000000000001"
		const addresslBohx1p = accounts[3]
		const address1qxX4t = accounts[0]
		const addressIwinqUe = accounts[3]
		const uintdJFNygl = await ANRXTokenLFBoMEe.allowance.call(addresslBohx1p, addressC9guzAy, {from: accounts[3]});
		const uintxeJYxUw = await ANRXTokenLFBoMEe.totalSupply.call({from: accounts[1]});
		const uintfmu5iVS = await ANRXTokenLFBoMEe.totalSupply.call({from: accounts[4]});
		const uintkAVM4lB = await ANRXTokenLFBoMEe.balanceOf.call(address1qxX4t, {from: accounts[0]});
//		const addressmU9ae09 = await ANRXTokenLFBoMEe.deprecate.call(addressIwinqUe, {from: accounts[4]});

		assert.equal(uintdJFNygl, BigInt("0"))
		assert.equal(uintfmu5iVS, BigInt("2044"))
		assert.equal(uintkAVM4lB, BigInt("0"))
		assert.equal(uintxeJYxUw, BigInt("2044"))
		await expect(ANRXTokenLFBoMEe.deprecate.call(addressIwinqUe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintCPlsL34 = BigInt("114")
		const stringaWvnf3S = "lpEXAJYzOuIcN"
		const stringpJnOyD = "wn2cCt33ymz5tFOSSqlfchfsHQhdDlUnSgI11CS38wTrhvVqid2TlIvaHLthcpvM2P3Ko4w62xQ4jp"
		const uintc6uDLzt = BigInt("170")
		const ANRXTokenKbg7mOI = await ANRXToken.new(uintCPlsL34, stringaWvnf3S, stringpJnOyD, uintc6uDLzt, {from: accounts[2]});
		const uintaZS0ddt = BigInt("10")
		const uintA3mznI7 = BigInt("304")
		const addressY8l8KZK = accounts[0]
		const addressdqrqlB9 = accounts[0]
		const uintFuDUd3g = BigInt("968")
		const addressbumNZFj = accounts[0]
		const addresssnE5icL = accounts[0]
		const addressbVW0Eg1 = accounts[0]
//		const uintSOADmjS = await ANRXTokenKbg7mOI.setParams.call(uintA3mznI7, uintaZS0ddt, {from: accounts[2]});
//		const uintAY496NT = await ANRXTokenKbg7mOI.allowance.call(addressdqrqlB9, addressY8l8KZK, {from: accounts[2]});
//		const boolydA8KnZ = await ANRXTokenKbg7mOI.approve.call(addressbumNZFj, uintFuDUd3g, {from: accounts[3]});
//		const uint197QX4 = await ANRXTokenKbg7mOI.allowance.call(addressbVW0Eg1, addresssnE5icL, {from: accounts[0]});

		await expect(ANRXTokenKbg7mOI.setParams.call(uintA3mznI7, uintaZS0ddt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintAbpXvZI = BigInt("1834")
		const stringbR7gRzt = "6M2LPaeLNOjXncLbe7DxgcTNIgpSeamJ7lwSSV8k0NvIj2lSN2HNecTqyplK77JjrmkpynzohFttM38eY5smTfJ6gMi"
		const stringcNnfvvX = "1Jl"
		const uintmzdenma = BigInt("92")
		const ANRXTokenA4ISme0 = await ANRXToken.new(uintAbpXvZI, stringbR7gRzt, stringcNnfvvX, uintmzdenma, {from: accounts[0]});
		const address7KaNAq = accounts[0]
		const uintHs1x15m = BigInt("614")
		const addressPVeRVnh = accounts[0]
		const addressYBbXu8 = accounts[4]
		const uintzjUAhzn = BigInt("58")
		const addressyo791Ev = accounts[0]
		const addressWbpKlf3 = accounts[1]
		const addressvGqARIM = accounts[3]
		const uintrnamuIy = await ANRXTokenA4ISme0.totalSupply.call({from: accounts[2]});
		const uintmw8xPGq = await ANRXTokenA4ISme0.balanceOf.call(address7KaNAq, {from: accounts[2]});
//		const boolYgEoRKz = await ANRXTokenA4ISme0.transferFrom.call(addressYBbXu8, addressPVeRVnh, uintHs1x15m, {from: accounts[0]});
//		const boolh8yMX4 = await ANRXTokenA4ISme0.approve.call(addressyo791Ev, uintzjUAhzn, {from: accounts[1]});
//		const uintLd5vukW = await ANRXTokenA4ISme0.allowance.call(addressvGqARIM, addressWbpKlf3, {from: accounts[4]});

		assert.equal(uintmw8xPGq, BigInt("1834"))
		assert.equal(uintrnamuIy, BigInt("1834"))
		await expect(ANRXTokenA4ISme0.transferFrom.call(addressYBbXu8, addressPVeRVnh, uintHs1x15m, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintaWJUYl5 = BigInt("1288")
		const stringeVamlv = "e5pLc8kH8yGvDhyMZSsX3q31gsOgvbI4FVWKXad4k4eCTuy5D6pGGqmtKlw7TyP9IU4TChwd8PNRUeLBzELICB9"
		const stringS3Cypz = "AKUpjoQj"
		const uintZwwppAo = BigInt("1567")
		const ANRXTokenkTpw3tO = await ANRXToken.new(uintaWJUYl5, stringeVamlv, stringS3Cypz, uintZwwppAo, {from: accounts[4]});
		const addressoYug8CW = accounts[1]
		const addresslwR5cWE = accounts[4]
		const uintkAEmuVR = BigInt("270")
		const uintDljQLS1 = BigInt("12")
		const uintDaCeUMp = await ANRXTokenkTpw3tO.allowance.call(addresslwR5cWE, addressoYug8CW, {from: accounts[1]});
//		const uintuHqA2u5 = await ANRXTokenkTpw3tO.setParams.call(uintDljQLS1, uintkAEmuVR, {from: accounts[4]});

		assert.equal(uintDaCeUMp, BigInt("0"))
		await expect(ANRXTokenkTpw3tO.setParams.call(uintDljQLS1, uintkAEmuVR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintKziSWZU = BigInt("527")
		const stringB6CZBfT = "CtvOWhKDNlf85e2ooel0HCWwMz8aUw9FQlSUcXmmawGESdB69i"
		const stringgj0WgE = "hfW6QkvLX3Pv71yDFJ6XXmSl6cgGOGcCh72rqMAlKEsh"
		const uintpZLLupg = BigInt("1939")
		const ANRXTokenfKov79 = await ANRXToken.new(uintKziSWZU, stringB6CZBfT, stringgj0WgE, uintpZLLupg, {from: accounts[3]});
		const addressb8qyJTX = accounts[4]
		const uintnScspeS = BigInt("476")
		const addressEeqzZoS = accounts[2]
		const uintPKlin7y = BigInt("1141")
		const uint6H3MJb = BigInt("1051")
		const uintyMJKpgz = await ANRXTokenfKov79.balanceOf.call(addressb8qyJTX, {from: accounts[0]});
		const boolN5VbKnI = await ANRXTokenfKov79.approve.call(addressEeqzZoS, uintnScspeS, {from: accounts[3]});
//		const uintjRCkM5W = await ANRXTokenfKov79.redeem.call(uintPKlin7y, {from: accounts[3]});
//		const uintS77U171 = await ANRXTokenfKov79.redeem.call(uint6H3MJb, {from: accounts[4]});

		assert.equal(boolN5VbKnI, true)
		assert.equal(uintyMJKpgz, BigInt("0"))
		await expect(ANRXTokenfKov79.redeem.call(uintPKlin7y, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintY89CMgX = BigInt("1288")
		const stringeVamlv = "e5pLc8kH8yGvDhyMZSsX3q31gsOgvbI4FVWKXad4k4eCTuy5D6pGGqmtKlw7TyP9IU4TChwd8PNRUeLBzELICB9"
		const stringS3Cypz = "AKUpjoQj"
		const uintF5SpR4f = BigInt("1567")
		const ANRXTokenkTpw3tO = await ANRXToken.new(uintY89CMgX, stringeVamlv, stringS3Cypz, uintF5SpR4f, {from: accounts[4]});
		const addressvd9p652 = accounts[1]
		const addressRJRn5fg = accounts[4]
		const addresszLK8Ope = accounts[4]
		const uintn953kuU = await ANRXTokenkTpw3tO.totalSupply.call({from: accounts[1]});
		const uintDaCeUMp = await ANRXTokenkTpw3tO.allowance.call(addressRJRn5fg, addressvd9p652, {from: accounts[1]});
		const addressWkFT5p1 = await ANRXTokenkTpw3tO.deprecate.call(addresszLK8Ope, {from: accounts[4]});

		assert.equal(uintDaCeUMp, BigInt("0"))
		assert.equal(uintn953kuU, BigInt("1288"))
	});

	it('test for ANRXToken', async () => {
		const uintv5rj7L = BigInt("1551")
		const stringgyN2veQ = "HnSCPC3XIG1jUOCgPFlfTWBAxHKrfyAO7Eec3JHqmJBhDBwhGdRBQ7DvBDf5NjnqnFsi1ldaZzVe"
		const stringJxit02 = "s9fvF4G7IkPD07bMelKtjkm9Hgm4vGAzpo7JKFe8Oivvdp7ATFl1Bzt9usPX"
		const uintZluT08 = BigInt("1527")
		const ANRXTokenGHmzYAe = await ANRXToken.new(uintv5rj7L, stringgyN2veQ, stringJxit02, uintZluT08, {from: accounts[3]});
		const uintrzy84cs = BigInt("360")
		const uinttZumng8 = BigInt("1648")
		const uintdOnID9N = BigInt("710")
		const uintfCLPR5j = BigInt("208")
		const addressmVtAkXP = accounts[1]
		const uintggGyMU = await ANRXTokenGHmzYAe.redeem.call(uintrzy84cs, {from: accounts[3]});
//		const uintu8Wg8VV = await ANRXTokenGHmzYAe.setParams.call(uintdOnID9N, uinttZumng8, {from: accounts[2]});
//		const boolDfKtSLG = await ANRXTokenGHmzYAe.approve.call(addressmVtAkXP, uintfCLPR5j, {from: accounts[2]});
//		const uintP8JwUkI = await ANRXTokenGHmzYAe.totalSupply.call({from: accounts[1]});

		await expect(ANRXTokenGHmzYAe.setParams.call(uintdOnID9N, uinttZumng8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintLqdg0n = BigInt("527")
		const stringB6CZBfT = "CtvOWhKDNlf85e2ooel0HCWwMz8aUw9FQlSUcXmmawGESdB69i"
		const stringgj0WgE = "hfW6QkvLX3Pv71yDFJ6XXmSl6cgGOGcCh72rqMAlKEsh"
		const uintNDqUuz = BigInt("1939")
		const ANRXTokenfKov79 = await ANRXToken.new(uintLqdg0n, stringB6CZBfT, stringgj0WgE, uintNDqUuz, {from: accounts[3]});
		const uintO1rjBrm = BigInt("208")
		const uintPV0q17w = BigInt("476")
		const addressaFvBnwE = accounts[1]
		const uintJUfR5eq = BigInt("42")
		const addressJLy4pyl = accounts[0]
		const addressUd8ih4w = accounts[0]
		const uintbhyKfnx = BigInt("1051")
		const addressbjaN1wB = "0x0000000000000000000000000000000000000001"
		const addresse9NCQJ = accounts[3]
		const uintt76zuR1 = await ANRXTokenfKov79.issue.call(uintO1rjBrm, {from: accounts[3]});
		const boolN5VbKnI = await ANRXTokenfKov79.approve.call(addressaFvBnwE, uintPV0q17w, {from: accounts[3]});
		const uintBXgwstp = await ANRXTokenfKov79.totalSupply.call({from: accounts[1]});
//		const boolx0ylKxf = await ANRXTokenfKov79.transferFrom.call(addressUd8ih4w, addressJLy4pyl, uintJUfR5eq, {from: "0x0000000000000000000000000000000000000001"});
//		const uintS77U171 = await ANRXTokenfKov79.redeem.call(uintbhyKfnx, {from: accounts[4]});
//		const uintai4Zz8A = await ANRXTokenfKov79.allowance.call(addresse9NCQJ, addressbjaN1wB, {from: accounts[0]});

		assert.equal(boolN5VbKnI, true)
		assert.equal(uintBXgwstp, BigInt("527"))
		await expect(ANRXTokenfKov79.transferFrom.call(addressUd8ih4w, addressJLy4pyl, uintJUfR5eq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintW28KZg3 = BigInt("191")
		const stringTJcnSR = "ekKpY8DWdAGqqDjG3ze8CfcbJhyB4Ti1wn3xVSJQ3oy4BQGEiVU6iKCsU"
		const stringsPDVcSH = "nfqvSYnvWIeRuiTu5D12QSZUDTLN1ORQtrBEcjHFCUdO"
		const uintv0PGg9O = BigInt("538")
		const ANRXTokenrfPVGR1 = await ANRXToken.new(uintW28KZg3, stringTJcnSR, stringsPDVcSH, uintv0PGg9O, {from: "0x0000000000000000000000000000000000000001"});
		const addressPEabXpj = accounts[3]
		const uintMwt4ijf = BigInt("250")
		const addressGcZiEHm = accounts[2]
		const uintQjEdSwE = await ANRXTokenrfPVGR1.balanceOf.call(addressPEabXpj, {from: accounts[2]});
		const uintXsXJesQ = await ANRXTokenrfPVGR1.redeem.call(uintMwt4ijf, {from: accounts[4]});
		const uintUfpaVN = await ANRXTokenrfPVGR1.balanceOf.call(addressGcZiEHm, {from: "0x0000000000000000000000000000000000000001"});
	});
})