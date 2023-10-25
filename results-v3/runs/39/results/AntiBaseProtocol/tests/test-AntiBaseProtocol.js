const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const stringsw1e3r4 = "nIQgTBfmbZA7LhiVVEJtMtzEVRpoTpNcVb65wgQ5Nv3RtjEC6K"
		const stringHfa9U4G = "eHcHLm6G7Ey61rnIloGWgQyCCYeA0CdDqH6Cc2tapryHN24oVcnBWe8UkSAJm0V3TL"
		const uintkhldcre = BigInt("53")
		const AntiBaseProtocololBDc7s = await AntiBaseProtocol.new(stringsw1e3r4, stringHfa9U4G, uintkhldcre, {from: accounts[0]});
		const addressXxukhuz = accounts[0]
		const addressMToj5Tm = accounts[4]
		const uintZBkGcs = BigInt("661")
		const addresscMMxUrE = accounts[3]
		const addressBXtBUAg = "0x0000000000000000000000000000000000000001"
		const uintMQTioM = BigInt("654")
		const uintbZAPJLi = BigInt("682")
		const addressphDYlSc = accounts[3]
		const uint256rDJ92FQ = await AntiBaseProtocololBDc7s.allowance.call(addressMToj5Tm, addressXxukhuz, {from: accounts[4]});
		const boolPa4SXpw = await AntiBaseProtocololBDc7s.isOwner.call({from: accounts[0]});
		const addressKfVHj2u = await AntiBaseProtocololBDc7s._approve.call(addressBXtBUAg, addresscMMxUrE, uintZBkGcs, {from: accounts[0]});
		const uint256BF63cQd = await AntiBaseProtocololBDc7s.burn.call(uintMQTioM, {from: accounts[0]});
		const boolbfEU94R = await AntiBaseProtocololBDc7s.decreaseAllowance.call(addressphDYlSc, uintbZAPJLi, {from: accounts[2]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolk0nRVO9 = await AntiBaseProtocol.new({from: accounts[1]});
		const uintsAPvipW = BigInt("298")
		const uintosmGmiC = BigInt("723")
		const addressHd2MlXL = accounts[3]
		const addressa1Hkyhu = accounts[3]
		await AntiBaseProtocolk0nRVO9.renounceOwnership.call({from: accounts[4]});
		await AntiBaseProtocolk0nRVO9.renounceOwnership.call({from: accounts[1]});
		const uint256G589Vnr = await AntiBaseProtocolk0nRVO9.findBurnFee.call(uintsAPvipW, {from: accounts[1]});
		const boolfTo36xW = await AntiBaseProtocolk0nRVO9.transferFrom.call(addressa1Hkyhu, addressHd2MlXL, uintosmGmiC, {from: accounts[0]});

		await expect(AntiBaseProtocolk0nRVO9.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol76uhiX = await AntiBaseProtocol.new({from: accounts[3]});
		const uintjJVQa17 = BigInt("1280")
		const addressGmX0WqN = accounts[0]
		const addresskHrY7yR = accounts[0]
		const uintYbaubp5 = BigInt("912")
		const addresssG4Hsc8 = accounts[5]
		const uintCHsO39d = BigInt("50")
		const addressPMd0f5A = accounts[0]
		const uintsJy3eUN = BigInt("1757")
		const addressgaZJ7wj = accounts[0]
		const addressJ24OJZd = accounts[4]
		const boolHaEZoL4 = await AntiBaseProtocol76uhiX.transferFrom.call(addresskHrY7yR, addressGmX0WqN, uintjJVQa17, {from: accounts[5]});
		const addresshQzm10D = await AntiBaseProtocol76uhiX.burnFrom.call(addresssG4Hsc8, uintYbaubp5, {from: accounts[1]});
		const boolTcuSEoY = await AntiBaseProtocol76uhiX.approve.call(addressPMd0f5A, uintCHsO39d, {from: accounts[3]});
		const addressbcPkW4a = await AntiBaseProtocol76uhiX.burnFrom.call(addressgaZJ7wj, uintsJy3eUN, {from: accounts[1]});
		const uint256X1QlEl = await AntiBaseProtocol76uhiX.balanceOf.call(addressJ24OJZd, {from: accounts[1]});

		await expect(AntiBaseProtocol76uhiX.transferFrom.call(addresskHrY7yR, addressGmX0WqN, uintjJVQa17, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZFApT3M = await AntiBaseProtocol.new({from: accounts[5]});
		const uintOEiIRyh = BigInt("192")
		const addressYPmSG3U = accounts[1]
		const uintY0hmIA = BigInt("80")
		const boolig123s3 = await AntiBaseProtocolZFApT3M.transfer.call(addressYPmSG3U, uintOEiIRyh, {from: accounts[0]});
		await AntiBaseProtocolZFApT3M.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const stringHpVHCa8 = await AntiBaseProtocolZFApT3M.symbol.call({from: accounts[2]});
		const stringVOcdC3K = await AntiBaseProtocolZFApT3M.symbol.call({from: accounts[1]});
		const uint256Jd240Ct = await AntiBaseProtocolZFApT3M.burn.call(uintY0hmIA, {from: accounts[4]});

		await expect(AntiBaseProtocolZFApT3M.transfer.call(addressYPmSG3U, uintOEiIRyh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolVRtfauQ = await AntiBaseProtocol.new({from: accounts[0]});
		const uintGm7ZbOe = BigInt("797")
		const addresso1U1QCP = accounts[4]
		const addressIIlGRz8 = await AntiBaseProtocolVRtfauQ._burn.call(addresso1U1QCP, uintGm7ZbOe, {from: accounts[2]});
		const uint8xIGd2LP = await AntiBaseProtocolVRtfauQ.decimals.call({from: accounts[5]});
		await AntiBaseProtocolVRtfauQ.onlyOwner.call({from: accounts[2]});

		await expect(AntiBaseProtocolVRtfauQ._burn.call(addresso1U1QCP, uintGm7ZbOe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocold682Qm9 = await AntiBaseProtocol.new({from: accounts[5]});
		const uintC5yYSXc = BigInt("1984")
		const addressUs0p8sm = accounts[1]
		const uintssZGLyo = BigInt("1993")
		const addressb9jZTS = accounts[0]
		const addressK9bDnHK = accounts[3]
		const uintZuVwxVL = BigInt("940")
		const addressuldsGA6 = accounts[0]
		const boolpVIHXvZ = await AntiBaseProtocold682Qm9.approve.call(addressUs0p8sm, uintC5yYSXc, {from: accounts[2]});
		const boolMYdEBNA = await AntiBaseProtocold682Qm9.transferFrom.call(addressK9bDnHK, addressb9jZTS, uintssZGLyo, {from: accounts[4]});
		const boolxvf3dAD = await AntiBaseProtocold682Qm9.decreaseAllowance.call(addressuldsGA6, uintZuVwxVL, {from: accounts[2]});
		const addressfDuK2FF = await AntiBaseProtocold682Qm9.owner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolpVIHXvZ, true)
		await expect(AntiBaseProtocold682Qm9.transferFrom.call(addressK9bDnHK, addressb9jZTS, uintssZGLyo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolbTTlvKh = await AntiBaseProtocol.new({from: accounts[4]});
		const uintwjr5woz = BigInt("360")
		const uintJXxF2Qc = BigInt("1984")
		const addresscQRMpek = accounts[3]
		const addressIW788Iz = accounts[5]
		const addresswCEDkIz = accounts[5]
		const stringbWgzEje = await AntiBaseProtocolbTTlvKh.name.call({from: accounts[0]});
		const uint256WwS1ruN = await AntiBaseProtocolbTTlvKh.findRewardFee.call(uintwjr5woz, {from: accounts[0]});
		const addressfsygCJ9 = await AntiBaseProtocolbTTlvKh.burnFrom.call(addresscQRMpek, uintJXxF2Qc, {from: accounts[2]});
		const uint256MJc55im = await AntiBaseProtocolbTTlvKh.allowance.call(addresswCEDkIz, addressIW788Iz, {from: accounts[2]});
		const addresstEhQy7s = await AntiBaseProtocolbTTlvKh.owner.call({from: accounts[2]});

		assert.equal(stringbWgzEje, "https://t.me/antibaseprotocol")
		assert.equal(uint256WwS1ruN, BigInt("20"))
		await expect(AntiBaseProtocolbTTlvKh.burnFrom.call(addresscQRMpek, uintJXxF2Qc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZFApT3M = await AntiBaseProtocol.new({from: accounts[5]});
		const addressDFTbvod = accounts[5]
		const addressmQiX6od = accounts[1]
		const uintH3qnUEY = BigInt("192")
		const addressohaZUwu = accounts[1]
		const uintL4JVuUE = BigInt("1464")
		const uint256I5O9LX2 = await AntiBaseProtocolZFApT3M.allowance.call(addressmQiX6od, addressDFTbvod, {from: accounts[3]});
		const boolig123s3 = await AntiBaseProtocolZFApT3M.transfer.call(addressohaZUwu, uintH3qnUEY, {from: accounts[0]});
		const uint256JFV7HxE = await AntiBaseProtocolZFApT3M.findBurnFee.call(uintL4JVuUE, {from: accounts[2]});
		await AntiBaseProtocolZFApT3M.onlyOwner.call({from: accounts[0]});
		const stringVOcdC3K = await AntiBaseProtocolZFApT3M.symbol.call({from: accounts[1]});

		assert.equal(uint256I5O9LX2, BigInt("0"))
		await expect(AntiBaseProtocolZFApT3M.transfer.call(addressohaZUwu, uintH3qnUEY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZFApT3M = await AntiBaseProtocol.new({from: accounts[5]});
		const stringHpVHCa8 = await AntiBaseProtocolZFApT3M.symbol.call({from: accounts[2]});
		const stringVOcdC3K = await AntiBaseProtocolZFApT3M.symbol.call({from: accounts[1]});

		assert.equal(stringHpVHCa8, "ABASE")
		assert.equal(stringVOcdC3K, "ABASE")
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZFApT3M = await AntiBaseProtocol.new({from: accounts[5]});
		const uintidMygM1 = BigInt("80")
		const stringHpVHCa8 = await AntiBaseProtocolZFApT3M.symbol.call({from: accounts[2]});
		const stringVOcdC3K = await AntiBaseProtocolZFApT3M.symbol.call({from: accounts[1]});
		const uint256Jd240Ct = await AntiBaseProtocolZFApT3M.burn.call(uintidMygM1, {from: accounts[4]});

		assert.equal(stringHpVHCa8, "ABASE")
		assert.equal(stringVOcdC3K, "ABASE")
		await expect(AntiBaseProtocolZFApT3M.burn.call(uintidMygM1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolbTTlvKh = await AntiBaseProtocol.new({from: accounts[4]});
		const uintZdb5fpv = BigInt("360")
		const uintyvKpxHp = BigInt("1984")
		const addressZInCYFZ = accounts[3]
		const addressYxEED0g = "0x0000000000000000000000000000000000000001"
		const addresskLM18PQ = accounts[5]
		const addresssjoDsY = accounts[7]
		const stringbWgzEje = await AntiBaseProtocolbTTlvKh.name.call({from: accounts[0]});
		const uint256WwS1ruN = await AntiBaseProtocolbTTlvKh.findRewardFee.call(uintZdb5fpv, {from: accounts[0]});
		const uint8TuIOqA6 = await AntiBaseProtocolbTTlvKh.decimals.call({from: accounts[3]});
		const addressfsygCJ9 = await AntiBaseProtocolbTTlvKh.burnFrom.call(addressZInCYFZ, uintyvKpxHp, {from: accounts[2]});
		const addressw07JDtG = await AntiBaseProtocolbTTlvKh._transferOwnership.call(addressYxEED0g, {from: "0x0000000000000000000000000000000000000001"});
		const boolDDRn9zq = await AntiBaseProtocolbTTlvKh.isOwner.call({from: accounts[0]});
		const uint256MJc55im = await AntiBaseProtocolbTTlvKh.allowance.call(addresssjoDsY, addresskLM18PQ, {from: accounts[2]});
		const addresstEhQy7s = await AntiBaseProtocolbTTlvKh.owner.call({from: accounts[2]});

		assert.equal(stringbWgzEje, "https://t.me/antibaseprotocol")
		assert.equal(uint256WwS1ruN, BigInt("20"))
		assert.equal(uint8TuIOqA6, BigInt("18"))
		await expect(AntiBaseProtocolbTTlvKh.burnFrom.call(addressZInCYFZ, uintyvKpxHp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolbTTlvKh = await AntiBaseProtocol.new({from: accounts[4]});
		const uintRIfN6SH = BigInt("360")
		const uintifqOGWt = BigInt("1984")
		const addressNrltaou = accounts[3]
		const addressibMrhRR = accounts[7]
		const addressJh7hMD = accounts[5]
		const uintx0RbOk5 = BigInt("561")
		const addressD76nqIK = accounts[0]
		const addressHpjHMw = accounts[5]
		const uintVKKRf8 = BigInt("215")
		const addressvZfYN8B = "0x0000000000000000000000000000000000000001"
		const stringbWgzEje = await AntiBaseProtocolbTTlvKh.name.call({from: accounts[0]});
		const uint256AvKIhhJ = await AntiBaseProtocolbTTlvKh.totalSupply.call({from: accounts[2]});
		const uint256WwS1ruN = await AntiBaseProtocolbTTlvKh.findRewardFee.call(uintRIfN6SH, {from: accounts[0]});
		const addressfsygCJ9 = await AntiBaseProtocolbTTlvKh.burnFrom.call(addressNrltaou, uintifqOGWt, {from: accounts[2]});
		const uint256MJc55im = await AntiBaseProtocolbTTlvKh.allowance.call(addressJh7hMD, addressibMrhRR, {from: accounts[2]});
		const boolMEQeaMf = await AntiBaseProtocolbTTlvKh.isOwner.call({from: accounts[2]});
		const addressghs97Zt = await AntiBaseProtocolbTTlvKh._approve.call(addressHpjHMw, addressD76nqIK, uintx0RbOk5, {from: accounts[4]});
		const addressbZfz0rl = await AntiBaseProtocolbTTlvKh._burn.call(addressvZfYN8B, uintVKKRf8, {from: accounts[3]});
		const addresstEhQy7s = await AntiBaseProtocolbTTlvKh.owner.call({from: accounts[2]});

		assert.equal(stringbWgzEje, "https://t.me/antibaseprotocol")
		assert.equal(uint256AvKIhhJ, BigInt("31250000000000000000"))
		assert.equal(uint256WwS1ruN, BigInt("20"))
		await expect(AntiBaseProtocolbTTlvKh.burnFrom.call(addressNrltaou, uintifqOGWt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZFApT3M = await AntiBaseProtocol.new({from: accounts[5]});
		const uintW4yaV2 = BigInt("1448")
		const addressTqxqhFO = accounts[0]
		const uintBbRaOYU = BigInt("192")
		const addresswvC9Ph = accounts[1]
		const uintyARCPgV = BigInt("1418")
		const addressD2PLIT7 = accounts[2]
		const addressG9H3iW = accounts[0]
		const uint256g7Qisgo = await AntiBaseProtocolZFApT3M.findBurnFee.call(uintW4yaV2, {from: accounts[4]});
		const uint256w1cjOci = await AntiBaseProtocolZFApT3M.balanceOf.call(addressTqxqhFO, {from: accounts[2]});
		const boolig123s3 = await AntiBaseProtocolZFApT3M.transfer.call(addresswvC9Ph, uintBbRaOYU, {from: accounts[0]});
		const stringHpVHCa8 = await AntiBaseProtocolZFApT3M.symbol.call({from: accounts[2]});
		const addressevNr3rz = await AntiBaseProtocolZFApT3M._approve.call(addressG9H3iW, addressD2PLIT7, uintyARCPgV, {from: accounts[5]});
		const stringVOcdC3K = await AntiBaseProtocolZFApT3M.symbol.call({from: accounts[1]});

		assert.equal(uint256g7Qisgo, BigInt("225"))
		assert.equal(uint256w1cjOci, BigInt("0"))
		await expect(AntiBaseProtocolZFApT3M.transfer.call(addresswvC9Ph, uintBbRaOYU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolbTTlvKh = await AntiBaseProtocol.new({from: accounts[4]});
		const uintefOqeMv = BigInt("378")
		const address32ZQHz = accounts[5]
		const address2YCIie = accounts[5]
		const stringbWgzEje = await AntiBaseProtocolbTTlvKh.name.call({from: accounts[0]});
		const uint256WwS1ruN = await AntiBaseProtocolbTTlvKh.findRewardFee.call(uintefOqeMv, {from: accounts[0]});
		const uint256MJc55im = await AntiBaseProtocolbTTlvKh.allowance.call(address2YCIie, address32ZQHz, {from: accounts[2]});
		const addresstEhQy7s = await AntiBaseProtocolbTTlvKh.owner.call({from: accounts[2]});

		assert.equal(addresstEhQy7s, 0x5E46C8A2dc563fabaB6336BA2A5CeBCf278e32c7)
		assert.equal(stringbWgzEje, "https://t.me/antibaseprotocol")
		assert.equal(uint256MJc55im, BigInt("0"))
		assert.equal(uint256WwS1ruN, BigInt("20"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolbTTlvKh = await AntiBaseProtocol.new({from: accounts[4]});
		const uintNWXydJ = BigInt("359")
		const uintsuO5e8r = BigInt("1984")
		const addressphTLVWT = accounts[4]
		const uintDAPN3RH = BigInt("1926")
		const uint256WwS1ruN = await AntiBaseProtocolbTTlvKh.findRewardFee.call(uintNWXydJ, {from: accounts[0]});
		const stringniRWdO0 = await AntiBaseProtocolbTTlvKh.name.call({from: accounts[0]});
		const addressfsygCJ9 = await AntiBaseProtocolbTTlvKh.burnFrom.call(addressphTLVWT, uintsuO5e8r, {from: accounts[2]});
		const boolDDRn9zq = await AntiBaseProtocolbTTlvKh.isOwner.call({from: accounts[0]});
		const uint256dClrexS = await AntiBaseProtocolbTTlvKh.findRewardFee.call(uintDAPN3RH, {from: accounts[4]});
		const addresstEhQy7s = await AntiBaseProtocolbTTlvKh.owner.call({from: accounts[2]});

		assert.equal(stringniRWdO0, "https://t.me/antibaseprotocol")
		assert.equal(uint256WwS1ruN, BigInt("20"))
		await expect(AntiBaseProtocolbTTlvKh.burnFrom.call(addressphTLVWT, uintsuO5e8r, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZFApT3M = await AntiBaseProtocol.new({from: accounts[5]});
		const uintzCxoZhQ = BigInt("1448")
		const uintzamik7 = BigInt("634")
		const uintdrPtPm = BigInt("304")
		const addresswKcJP9 = accounts[3]
		const uintQ6OBoyx = BigInt("192")
		const address5CiQYz = accounts[1]
		const uintJHajTkj = BigInt("1964")
		const addresstQb9dAj = accounts[0]
		const uintrCi7vfb = BigInt("1418")
		const addressfvhtBiL = accounts[2]
		const addressMCCfaPM = accounts[0]
		const uinti3Yt8b8 = BigInt("40")
		const uint8hbjUxj2 = await AntiBaseProtocolZFApT3M.decimals.call({from: accounts[0]});
		const uint256g7Qisgo = await AntiBaseProtocolZFApT3M.findBurnFee.call(uintzCxoZhQ, {from: accounts[4]});
		const uint8UGQvEeK = await AntiBaseProtocolZFApT3M.decimals.call({from: accounts[3]});
		const uint256P6tAaC = await AntiBaseProtocolZFApT3M.findBurnFee.call(uintzamik7, {from: "0x0000000000000000000000000000000000000001"});
		const boolM4wvOuM = await AntiBaseProtocolZFApT3M.increaseAllowance.call(addresswKcJP9, uintdrPtPm, {from: accounts[4]});
		const boolig123s3 = await AntiBaseProtocolZFApT3M.transfer.call(address5CiQYz, uintQ6OBoyx, {from: accounts[0]});
		const stringHpVHCa8 = await AntiBaseProtocolZFApT3M.symbol.call({from: accounts[2]});
		const uint256n0lxs1D = await AntiBaseProtocolZFApT3M.findRewardFee.call(uintJHajTkj, {from: accounts[0]});
		const uint256SVWWBi5 = await AntiBaseProtocolZFApT3M.balanceOf.call(addresstQb9dAj, {from: accounts[3]});
		const addressevNr3rz = await AntiBaseProtocolZFApT3M._approve.call(addressMCCfaPM, addressfvhtBiL, uintrCi7vfb, {from: accounts[5]});
		const uint256PY1AORy = await AntiBaseProtocolZFApT3M.burn.call(uinti3Yt8b8, {from: accounts[0]});
		const stringVOcdC3K = await AntiBaseProtocolZFApT3M.symbol.call({from: accounts[1]});

		assert.equal(boolM4wvOuM, true)
		assert.equal(uint256P6tAaC, BigInt("105"))
		assert.equal(uint256g7Qisgo, BigInt("225"))
		assert.equal(uint8UGQvEeK, BigInt("18"))
		assert.equal(uint8hbjUxj2, BigInt("18"))
		await expect(AntiBaseProtocolZFApT3M.transfer.call(address5CiQYz, uintQ6OBoyx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZFApT3M = await AntiBaseProtocol.new({from: accounts[5]});
		const addressk5HpIzX = accounts[3]
		const uintQTLh7en = BigInt("206")
		const addressQ6P2w1z = accounts[1]
		const uintOQ0HsrI = BigInt("500")
		const addressPdUbh4B = accounts[1]
		const addressNbeugwE = await AntiBaseProtocolZFApT3M.transferOwnership.call(addressk5HpIzX, {from: accounts[5]});
		const boolig123s3 = await AntiBaseProtocolZFApT3M.transfer.call(addressQ6P2w1z, uintQTLh7en, {from: accounts[0]});
		const stringHpVHCa8 = await AntiBaseProtocolZFApT3M.symbol.call({from: accounts[2]});
		const addressio0u7os = await AntiBaseProtocolZFApT3M._burn.call(addressPdUbh4B, uintOQ0HsrI, {from: accounts[5]});

		await expect(AntiBaseProtocolZFApT3M.transfer.call(addressQ6P2w1z, uintQTLh7en, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZFApT3M = await AntiBaseProtocol.new({from: accounts[5]});
		const uintaYkS7Ud = BigInt("863")
		const addressAMSlCnN = accounts[3]
		const uintCRuM69l = BigInt("192")
		const addresse1BVvt = accounts[1]
		const boolQnGAYTn = await AntiBaseProtocolZFApT3M.transfer.call(addressAMSlCnN, uintaYkS7Ud, {from: accounts[5]});
		const boolig123s3 = await AntiBaseProtocolZFApT3M.transfer.call(addresse1BVvt, uintCRuM69l, {from: accounts[0]});
		await AntiBaseProtocolZFApT3M.renounceOwnership.call({from: accounts[3]});
		const stringHpVHCa8 = await AntiBaseProtocolZFApT3M.symbol.call({from: accounts[2]});

		assert.equal(boolQnGAYTn, true)
		await expect(AntiBaseProtocolZFApT3M.transfer.call(addresse1BVvt, uintCRuM69l, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolbTTlvKh = await AntiBaseProtocol.new({from: accounts[4]});
		const uint0rXpdG = BigInt("339")
		const uint4AKhub = BigInt("853")
		const addressrepiRnM = accounts[4]
		const uintdZ3fVd0 = BigInt("2000")
		const addressgAAMeWr = accounts[3]
		const uint256WwS1ruN = await AntiBaseProtocolbTTlvKh.findRewardFee.call(uint0rXpdG, {from: accounts[0]});
		const booluHbPGV = await AntiBaseProtocolbTTlvKh.decreaseAllowance.call(addressrepiRnM, uint4AKhub, {from: accounts[3]});
		const addressfsygCJ9 = await AntiBaseProtocolbTTlvKh.burnFrom.call(addressgAAMeWr, uintdZ3fVd0, {from: accounts[2]});
		const addresstEhQy7s = await AntiBaseProtocolbTTlvKh.owner.call({from: accounts[2]});

		assert.equal(uint256WwS1ruN, BigInt("20"))
		await expect(AntiBaseProtocolbTTlvKh.decreaseAllowance.call(addressrepiRnM, uint4AKhub, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolWQTTr4W = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uintwj2lfaq = BigInt("584")
		const addressRiaBg6e = accounts[1]
		const addressRp3qxeR = accounts[3]
		const addresszRJnY8o = accounts[4]
		const addressRx5Dy17 = "0x0000000000000000000000000000000000000001"
		const addressMkTfVG3 = accounts[0]
		const addressjXG3qT5 = accounts[2]
		const boolD3PgfC = await AntiBaseProtocolWQTTr4W.transferFrom.call(addressRp3qxeR, addressRiaBg6e, uintwj2lfaq, {from: accounts[0]});
		const uint256BlyssKb = await AntiBaseProtocolWQTTr4W.allowance.call(addressRx5Dy17, addresszRJnY8o, {from: accounts[3]});
		const uint8Om6KK79 = await AntiBaseProtocolWQTTr4W.decimals.call({from: accounts[3]});
		const uint256qh8fGBx = await AntiBaseProtocolWQTTr4W.allowance.call(addressjXG3qT5, addressMkTfVG3, {from: accounts[2]});
		const stringqo9sJ9A = await AntiBaseProtocolWQTTr4W.symbol.call({from: accounts[0]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZFApT3M = await AntiBaseProtocol.new({from: accounts[5]});
		const uintoFovk8R = BigInt("70")
		const uint3genEd = BigInt("387")
		const addressgpWCFRK = accounts[4]
		const uintTO5Hcu7 = BigInt("1658")
		const addressFp6F7R1 = accounts[5]
		const addressDB3LPDj = accounts[5]
		const uintdFa2Yf = BigInt("863")
		const addressytgugCE = accounts[3]
		const uintOTv8Wq = BigInt("192")
		const addressqr4pfa = accounts[2]
		const uint256Vo8oA1z = await AntiBaseProtocolZFApT3M.findRewardFee.call(uintoFovk8R, {from: accounts[2]});
		const booldCfkgS = await AntiBaseProtocolZFApT3M.transfer.call(addressgpWCFRK, uint3genEd, {from: accounts[5]});
		const boolViB27jB = await AntiBaseProtocolZFApT3M.transferFrom.call(addressDB3LPDj, addressFp6F7R1, uintTO5Hcu7, {from: accounts[2]});
		const boolQnGAYTn = await AntiBaseProtocolZFApT3M.transfer.call(addressytgugCE, uintdFa2Yf, {from: accounts[5]});
		const boolig123s3 = await AntiBaseProtocolZFApT3M.transfer.call(addressqr4pfa, uintOTv8Wq, {from: accounts[0]});
		await AntiBaseProtocolZFApT3M.renounceOwnership.call({from: accounts[3]});
		const stringvvL40SX = await AntiBaseProtocolZFApT3M.name.call({from: accounts[4]});
		const stringHpVHCa8 = await AntiBaseProtocolZFApT3M.symbol.call({from: accounts[2]});

		assert.equal(booldCfkgS, true)
		assert.equal(uint256Vo8oA1z, BigInt("5"))
		await expect(AntiBaseProtocolZFApT3M.transferFrom.call(addressDB3LPDj, addressFp6F7R1, uintTO5Hcu7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZFApT3M = await AntiBaseProtocol.new({from: accounts[5]});
		const uintN2aITzS = BigInt("70")
		const uintafarvrq = BigInt("387")
		const addressh0oEZ0o = accounts[5]
		const uintSn8Xt5u = BigInt("1730")
		const addresshuPvFIB = "0x0000000000000000000000000000000000000001"
		const uintvaGgTau = BigInt("10")
		const addressOxRlV8E = accounts[3]
		const uintN5WrqXR = BigInt("192")
		const addressCCyoeAb = accounts[2]
		const uint256Vo8oA1z = await AntiBaseProtocolZFApT3M.findRewardFee.call(uintN2aITzS, {from: accounts[2]});
		const booldCfkgS = await AntiBaseProtocolZFApT3M.transfer.call(addressh0oEZ0o, uintafarvrq, {from: accounts[5]});
		const boolsrm3uqY = await AntiBaseProtocolZFApT3M.approve.call(addresshuPvFIB, uintSn8Xt5u, {from: accounts[0]});
		const boolQnGAYTn = await AntiBaseProtocolZFApT3M.transfer.call(addressOxRlV8E, uintvaGgTau, {from: accounts[5]});
		const uint8EyRya2P = await AntiBaseProtocolZFApT3M.decimals.call({from: accounts[4]});
		const stringc8oxSOQ = await AntiBaseProtocolZFApT3M.name.call({from: accounts[4]});
		const boolig123s3 = await AntiBaseProtocolZFApT3M.transfer.call(addressCCyoeAb, uintN5WrqXR, {from: accounts[0]});
		const stringvvL40SX = await AntiBaseProtocolZFApT3M.name.call({from: accounts[4]});
		const stringHpVHCa8 = await AntiBaseProtocolZFApT3M.symbol.call({from: accounts[2]});

		assert.equal(booldCfkgS, true)
		assert.equal(boolsrm3uqY, true)
		assert.equal(uint256Vo8oA1z, BigInt("5"))
		await expect(AntiBaseProtocolZFApT3M.transfer.call(addressOxRlV8E, uintvaGgTau, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZFApT3M = await AntiBaseProtocol.new({from: accounts[5]});
		const uintSfbopuO = BigInt("726")
		const uinty8I2xx = BigInt("70")
		await AntiBaseProtocolZFApT3M.renounceOwnership.call({from: accounts[5]});
		const uint256dYKxumK = await AntiBaseProtocolZFApT3M.findBurnFee.call(uintSfbopuO, {from: accounts[4]});
		const uint256Vo8oA1z = await AntiBaseProtocolZFApT3M.findRewardFee.call(uinty8I2xx, {from: accounts[2]});

		await expect(AntiBaseProtocolZFApT3M.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})