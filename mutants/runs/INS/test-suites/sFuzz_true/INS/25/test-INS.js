const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uint87aNKR = BigInt("1869")
		const stringN8De3oB = "MmL"
		const stringbyIH2ai = "dDgctcn"
		const INSMhRXO8v = await INS.new(uint87aNKR, stringN8De3oB, stringbyIH2ai, {from: accounts[0]});
		const uintMApv1YD = BigInt("955")
		const addressqbQaLWl = accounts[0]
		const byteiq8Rumu = "0x10041b081e19"
		const uintdGXdoON = BigInt("1238")
		const addressYAoFEoZ = accounts[3]
		const uintnLs6uoh = BigInt("1118")
		const uintP3LMvqA = BigInt("909")
		const addressMygcLeL = accounts[1]
		const addressZ30XJ9C = accounts[3]
		const uintBjRpTur = BigInt("88")
		const boolo6UWDKO = await INSMhRXO8v.burnFrom.call(addressqbQaLWl, uintMApv1YD, {from: accounts[4]});
		const boolKOBWQ9p = await INSMhRXO8v.approveAndCall.call(addressYAoFEoZ, uintdGXdoON, byteiq8Rumu, {from: accounts[0]});
		const boolEbadKsO = await INSMhRXO8v.burn.call(uintnLs6uoh, {from: accounts[4]});
		const boolngtXPQX = await INSMhRXO8v.transferFrom.call(addressZ30XJ9C, addressMygcLeL, uintP3LMvqA, {from: accounts[4]});
		const boolfwPkzzB = await INSMhRXO8v.burn.call(uintBjRpTur, {from: accounts[2]});

		await expect(INSMhRXO8v.burnFrom.call(addressqbQaLWl, uintMApv1YD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintB3NxCgs = BigInt("11")
		const stringeP9bwd = "w7Y8EOhP"
		const stringOw3kX4 = "RixUihTgCb5cdqE5upfg2hgviw9yRoJuXYmiNSNdbLbR9h2"
		const INSdVYsMYF = await INS.new(uintB3NxCgs, stringeP9bwd, stringOw3kX4, {from: accounts[2]});
		const uintdtHmFPO = BigInt("1149")
		const addressY8jQStX = accounts[0]
		const uintNEm6Lp3 = BigInt("1217")
		const uintxbhF2Fy = BigInt("1147")
		const addressRTlYXTD = accounts[3]
		const addressECk4pOg = accounts[4]
		const boolBZ9VrkA = await INSdVYsMYF.transfer.call(addressY8jQStX, uintdtHmFPO, {from: accounts[0]});
		const boolCq64ldR = await INSdVYsMYF.burn.call(uintNEm6Lp3, {from: "0x0000000000000000000000000000000000000001"});
		const bool6AZfXI = await INSdVYsMYF.transferFrom.call(addressECk4pOg, addressRTlYXTD, uintxbhF2Fy, {from: "0x0000000000000000000000000000000000000001"});

		await expect(INSdVYsMYF.transfer.call(addressY8jQStX, uintdtHmFPO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintf0CrIbD = BigInt("1784")
		const stringSkrpCeh = "zGx8hHUMuCE9saOvgGVqMDhBjYmVPqEbbmFeOSuk4VuE6dolnvSFBVDw2Sn5f"
		const stringY7LS1og = "gLacMALujJGyhgpZ3iqTQMjUBQK2PMQdvj1JEvxV9VMoxpTarLEjXX"
		const INSNJhEsFZ = await INS.new(uintf0CrIbD, stringSkrpCeh, stringY7LS1og, {from: accounts[2]});
		const uintolos0TF = BigInt("1161")
		const addressvUP29UA = accounts[4]
		const addressj2qxKYe = accounts[4]
		const uintvpUpWlS = BigInt("675")
		const addressAcWCtP = accounts[0]
		const boolV53A5kM = await INSNJhEsFZ.transferFrom.call(addressj2qxKYe, addressvUP29UA, uintolos0TF, {from: accounts[4]});
		const booldsVCqWn = await INSNJhEsFZ.transfer.call(addressAcWCtP, uintvpUpWlS, {from: accounts[1]});

		await expect(INSNJhEsFZ.transferFrom.call(addressj2qxKYe, addressvUP29UA, uintolos0TF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintXaUBhl = BigInt("1132")
		const stringnxbtPpI = "HQx"
		const stringNrhuij = "IYJASjKfPH3qmCENuyl3C1oRStkWe7pbpe7kAKA1XgP84gI"
		const INSkARbk2 = await INS.new(uintXaUBhl, stringnxbtPpI, stringNrhuij, {from: "0x0000000000000000000000000000000000000001"});
		const uintjnptBwW = BigInt("775")
		const address9DKtGe = accounts[4]
		const uintUMKH5qs = BigInt("906")
		const bytetJkdpJ = "0x131e20171d1f051b1206100c040e03031914050f121f18140503160101091e"
		const uintglXgjzB = BigInt("558")
		const addressWENXVe = accounts[3]
		const uintBq8pCvK = BigInt("1247")
		const addressDvWMEDi = accounts[1]
		const boolPRZ4Yd = await INSkARbk2.approve.call(address9DKtGe, uintjnptBwW, {from: accounts[4]});
		const boolLdeliSa = await INSkARbk2.burn.call(uintUMKH5qs, {from: accounts[1]});
		const boolePozbMW = await INSkARbk2.approveAndCall.call(addressWENXVe, uintglXgjzB, bytetJkdpJ, {from: accounts[3]});
		const boolIodh0yg = await INSkARbk2.transfer.call(addressDvWMEDi, uintBq8pCvK, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for INS', async () => {
		const uintrcpoQWQ = BigInt("1598")
		const stringux7oIKP = "sI7nbQ9MpoYIzGuTbNnMGPayD03QwDoI3MxqSVmhbxvbQYld2i5osEUfXEEWJzizaktF7L9URwr9CK8rhlmH"
		const stringkSB9Mz = "zEJeKFrtLkVdhzohrQoB4hcIj6IHSJgQ7kYgAHSJr3hjNfI8NdAC2lglwF"
		const INSodDDphH = await INS.new(uintrcpoQWQ, stringux7oIKP, stringkSB9Mz, {from: accounts[5]});
		const byteTMqOi7x = "0x0e1c1d042009141d1a011101201919121e1f0b0410"
		const uintnModLo1 = BigInt("942")
		const addresswHPnvYc = accounts[3]
		const uintDX0kgZ = BigInt("1664")
		const uintLPm6yJa = BigInt("947")
		const addressglTiOjx = accounts[2]
		const addressSEEtoRm = accounts[2]
		const bytevYkIdCm = "0x1f1601"
		const uintb5ueebG = BigInt("369")
		const addressm9DQAOk = accounts[1]
		const uinttYAvRF7 = BigInt("56")
		const addressoVZiknj = accounts[2]
		const addressnbeDr2n = accounts[4]
		const uintSwQY6F = BigInt("1051")
		const addressHVznga = accounts[3]
		const boolWIkbja1 = await INSodDDphH.approveAndCall.call(addresswHPnvYc, uintnModLo1, byteTMqOi7x, {from: accounts[2]});
		const boolPlc6htM = await INSodDDphH.burn.call(uintDX0kgZ, {from: accounts[0]});
		const bool3NxgGL = await INSodDDphH.transferFrom.call(addressSEEtoRm, addressglTiOjx, uintLPm6yJa, {from: accounts[1]});
		const boolIpuZV7Q = await INSodDDphH.approveAndCall.call(addressm9DQAOk, uintb5ueebG, bytevYkIdCm, {from: accounts[3]});
		const boolF3FIqdY = await INSodDDphH.transferFrom.call(addressnbeDr2n, addressoVZiknj, uinttYAvRF7, {from: "0x0000000000000000000000000000000000000001"});
		const boolcxZt1bv = await INSodDDphH.approve.call(addressHVznga, uintSwQY6F, {from: accounts[0]});

		await expect(INSodDDphH.approveAndCall.call(addresswHPnvYc, uintnModLo1, byteTMqOi7x, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintrTtYSyI = BigInt("1791")
		const stringSPs8FNv = "7vA87bilehl2zyLxx0sDOd1QU23juQLSFunsRu1iB4DyCbENQmjjXr9GIp6p"
		const stringjLTmnqO = "MJLjdRS1A2I5WXDgL7qcOQ3a1vwVHwat6Suiwo4d"
		const INSE1OvxwC = await INS.new(uintrTtYSyI, stringSPs8FNv, stringjLTmnqO, {from: accounts[0]});
		const uintzU9Uc2n = BigInt("473")
		const uintLfcPGg = BigInt("1000")
		const addressD4CJgXS = accounts[0]
		const addresswDWoa5K = accounts[3]
		const uintRlINO2t = BigInt("1377")
		const addresssbMhghf = accounts[3]
		const uintzF6xoVv = BigInt("952")
		const boolC0zf4UR = await INSE1OvxwC.burn.call(uintzU9Uc2n, {from: accounts[3]});
		const boolTTzYLg6 = await INSE1OvxwC.transferFrom.call(addresswDWoa5K, addressD4CJgXS, uintLfcPGg, {from: accounts[4]});
		const boolC9srvRq = await INSE1OvxwC.approve.call(addresssbMhghf, uintRlINO2t, {from: accounts[1]});
		const boolAQoBpPM = await INSE1OvxwC.burn.call(uintzF6xoVv, {from: accounts[4]});

		await expect(INSE1OvxwC.burn.call(uintzU9Uc2n, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintkKoEne2 = BigInt("1791")
		const stringSPs8FNv = "7vA87bilehl2zyLxx0sDOd1QU23juQLSFunsRu1iB4DyCbENQmjjXr9GIp6p"
		const stringjLTmnqO = "MJLjdRS1A2I5WXDgL7qcOQ3a1vwVHwat6Suiwo4d"
		const INSE1OvxwC = await INS.new(uintkKoEne2, stringSPs8FNv, stringjLTmnqO, {from: accounts[0]});
		const uintIW5HAS = BigInt("810")
		const uintNHEsl24 = BigInt("947")
		const boolEuHo9Hy = await INSE1OvxwC.burn.call(uintIW5HAS, {from: accounts[0]});
		const boolAQoBpPM = await INSE1OvxwC.burn.call(uintNHEsl24, {from: accounts[4]});

		assert.equal(boolEuHo9Hy, true)
		await expect(INSE1OvxwC.burn.call(uintNHEsl24, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintaVl6GG = BigInt("1784")
		const stringSkrpCeh = "zGx8hHUMuCE9saOvgGVqMDhBjYmVPqEbbmFeOSuk4VuE6dolnvSFBVDw2Sn5f"
		const stringY7LS1og = "gLacMALujJGyhgpZ3iqTQMjUBQK2PMQdvj1JEvxV9VMoxpTarLEjXX"
		const INSNJhEsFZ = await INS.new(uintaVl6GG, stringSkrpCeh, stringY7LS1og, {from: accounts[2]});
		const uintVzExhnS = BigInt("543")
		const addressa4nkQ2y = accounts[0]
		const uintZh44oOb = BigInt("1161")
		const addressIaPKol2 = accounts[5]
		const addressHEmTZJu = accounts[4]
		const uintoC60kC = BigInt("1007")
		const addressjeS9GUJ = accounts[3]
		const uintc3Cp0m0 = BigInt("999")
		const addressWwPV0qK = accounts[0]
		const boolWzR10vT = await INSNJhEsFZ.transfer.call(addressa4nkQ2y, uintVzExhnS, {from: accounts[2]});
		const boolV53A5kM = await INSNJhEsFZ.transferFrom.call(addressHEmTZJu, addressIaPKol2, uintZh44oOb, {from: accounts[4]});
		const boolFMiWo4u = await INSNJhEsFZ.approve.call(addressjeS9GUJ, uintoC60kC, {from: accounts[2]});
		const boolSOzTM2e = await INSNJhEsFZ.burnFrom.call(addressWwPV0qK, uintc3Cp0m0, {from: accounts[1]});

		assert.equal(boolWzR10vT, true)
		await expect(INSNJhEsFZ.transferFrom.call(addressHEmTZJu, addressIaPKol2, uintZh44oOb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})