const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const stringSizqJZN = "iHWE80XiwSDDIg1tFDfIgGmwJVlgroevL"
		const stringpnDI8y3 = ""
		const uintQfedPrD = BigInt("176")
		const TPAZhGWzX5 = await TPA.new(stringSizqJZN, stringpnDI8y3, uintQfedPrD, {from: accounts[3]});
		const uintr6IvDot = BigInt("1273")
		const addressYD7qBr = accounts[3]
		const addressN6SxG9G = accounts[3]
		const addressd8B0kek = accounts[5]
		const boolTsJQjg8 = await TPAZhGWzX5.transfer.call(addressYD7qBr, uintr6IvDot, {from: accounts[4]});
		const addressy5QYQOW = await TPAZhGWzX5.transferOwnership.call(addressN6SxG9G, {from: accounts[2]});
		const uint256qq1xFt9 = await TPAZhGWzX5.balanceOf.call(addressd8B0kek, {from: accounts[3]});
	});

	it('test for TPA', async () => {
		const TPAXuieR9e = await TPA.new({from: accounts[2]});
		const uintD79gtq = BigInt("1940")
		const uint8n9ZKg85 = await TPAXuieR9e.decimals.call({from: accounts[3]});
		await TPAXuieR9e.onlyAdmin.call({from: accounts[3]});
		const uint256vgFb2Op = await TPAXuieR9e.burn.call(uintD79gtq, {from: accounts[0]});

		assert.equal(uint8n9ZKg85, BigInt("18"))
		await expect(TPAXuieR9e.onlyAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAnF9uMMg = await TPA.new({from: accounts[3]});
		const uintQmeBiJv = BigInt("183")
		const addressuxUooAN = accounts[0]
		const addressDdFVnSW = accounts[4]
		const addressgwNawb1 = accounts[2]
		const addressZiBdUBP = accounts[5]
		const boolGKXMAhr = await TPAnF9uMMg.transfer.call(addressuxUooAN, uintQmeBiJv, {from: accounts[4]});
		const addressXwZeOTF = await TPAnF9uMMg.removeAdmin.call(addressDdFVnSW, {from: accounts[4]});
		const stringrigyxkm = await TPAnF9uMMg.name.call({from: accounts[1]});
		const addressCeJoaEI = await TPAnF9uMMg.removeAdmin.call(addressgwNawb1, {from: accounts[1]});
		const boolkClYkXz = await TPAnF9uMMg.isAdmin.call(addressZiBdUBP, {from: "0x0000000000000000000000000000000000000001"});
		const stringtIkOwMo = await TPAnF9uMMg.name.call({from: accounts[2]});

		await expect(TPAnF9uMMg.transfer.call(addressuxUooAN, uintQmeBiJv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAy0eNGMc = await TPA.new({from: accounts[4]});
		const addresspn3swLT = accounts[4]
		const addressmJCHn4j = accounts[3]
		const addressu0txgAY = accounts[4]
		const uintTKtMsZm = BigInt("1807")
		const addressC5DIuBB = accounts[3]
		const uint256OQB9EiV = await TPAy0eNGMc.allowance.call(addressmJCHn4j, addresspn3swLT, {from: accounts[5]});
		await TPAy0eNGMc.onlyAdmin.call({from: accounts[0]});
		const addressFC5ouFF = await TPAy0eNGMc.transferOwnership.call(addressu0txgAY, {from: accounts[1]});
		const boolGUcRn0j = await TPAy0eNGMc.transfer.call(addressC5DIuBB, uintTKtMsZm, {from: accounts[3]});

		assert.equal(uint256OQB9EiV, BigInt("0"))
		await expect(TPAy0eNGMc.onlyAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACiems2m = await TPA.new({from: accounts[4]});
		const uintd4pFqUW = BigInt("1962")
		const addressia0z44j = accounts[3]
		const uint8FPqvvb = await TPACiems2m.decimals.call({from: accounts[4]});
		const boolYjEKIsl = await TPACiems2m.unlock.call(addressia0z44j, uintd4pFqUW, {from: accounts[0]});

		assert.equal(uint8FPqvvb, BigInt("18"))
		await expect(TPACiems2m.unlock.call(addressia0z44j, uintd4pFqUW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAdAIJLLh = await TPA.new({from: accounts[0]});
		const addressfRYQye3 = accounts[0]
		const addressHBvazpL = "0x0000000000000000000000000000000000000001"
		const addressA7XG4MX = accounts[1]
		const boolaajQHk = await TPAdAIJLLh.freezeAccount.call(addressfRYQye3, {from: accounts[0]});
		await TPAdAIJLLh.unpause.call({from: accounts[5]});
		const addressyHNrpEv = await TPAdAIJLLh.addAdmin.call(addressHBvazpL, {from: accounts[3]});
		await TPAdAIJLLh.whenNotPaused.call({from: accounts[2]});
		const boolnODMfw0 = await TPAdAIJLLh.isOwner.call(addressA7XG4MX, {from: accounts[1]});
		const uint256I4Cmopq = await TPAdAIJLLh.totalSupply.call({from: accounts[2]});

		assert.equal(boolaajQHk, true)
		await expect(TPAdAIJLLh.unpause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACiems2m = await TPA.new({from: accounts[4]});
		const addressTs68ZTG = accounts[4]
		const addresspFt2w1 = accounts[3]
		const uintDimvkzU = BigInt("1029")
		const address6lgaxB = "0x0000000000000000000000000000000000000001"
		const uintsJE8skT = BigInt("1704")
		const addresswjixnmu = accounts[1]
		const uinteV5QYTT = BigInt("1962")
		const addressxm7Am2 = accounts[3]
		const addressZMK7xVc = accounts[3]
		const uint256SOGr9pr = await TPACiems2m.allowance.call(addresspFt2w1, addressTs68ZTG, {from: accounts[1]});
		const boolDtwDjhc = await TPACiems2m.approve.call(address6lgaxB, uintDimvkzU, {from: accounts[2]});
		const boolKSmjl1e = await TPACiems2m.transfer.call(addresswjixnmu, uintsJE8skT, {from: accounts[1]});
		const uint8FPqvvb = await TPACiems2m.decimals.call({from: accounts[4]});
		const boolYjEKIsl = await TPACiems2m.unlock.call(addressxm7Am2, uinteV5QYTT, {from: accounts[0]});
		const boolFOcNjrz = await TPACiems2m.freezeAccount.call(addressZMK7xVc, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolDtwDjhc, true)
		assert.equal(uint256SOGr9pr, BigInt("0"))
		await expect(TPACiems2m.transfer.call(addresswjixnmu, uintsJE8skT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAdAIJLLh = await TPA.new({from: accounts[0]});
		const address7T53Er = accounts[0]
		const addressDtw7p63 = "0x0000000000000000000000000000000000000001"
		const addresswbnSIff = accounts[1]
		const boolaajQHk = await TPAdAIJLLh.freezeAccount.call(address7T53Er, {from: accounts[0]});
		const boolHndXoG1 = await TPAdAIJLLh.paused.call({from: accounts[4]});
		const addressyHNrpEv = await TPAdAIJLLh.addAdmin.call(addressDtw7p63, {from: accounts[3]});
		await TPAdAIJLLh.onlyAdmin.call({from: accounts[0]});
		await TPAdAIJLLh.whenNotPaused.call({from: accounts[2]});
		const boolnODMfw0 = await TPAdAIJLLh.isOwner.call(addresswbnSIff, {from: accounts[1]});
		const uint256I4Cmopq = await TPAdAIJLLh.totalSupply.call({from: accounts[2]});

		assert.equal(boolHndXoG1, false)
		assert.equal(boolaajQHk, true)
		await expect(TPAdAIJLLh.addAdmin.call(addressDtw7p63, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACiems2m = await TPA.new({from: accounts[4]});
		const addressgCapQnG = accounts[5]
		const uinthQfDKbf = BigInt("1962")
		const addresszQgkd5w = accounts[4]
		const uintVzZD9Se = BigInt("1653")
		const addresszTXLCdi = accounts[1]
		const addresswLjbc4H = "0x0000000000000000000000000000000000000001"
		const boolD3KLPAX = await TPACiems2m.isAdmin.call(addressgCapQnG, {from: accounts[2]});
		const uint256ugcslrs = await TPACiems2m.totalSupply.call({from: accounts[2]});
		const uint8FPqvvb = await TPACiems2m.decimals.call({from: accounts[4]});
		const boolYjEKIsl = await TPACiems2m.unlock.call(addresszQgkd5w, uinthQfDKbf, {from: accounts[0]});
		const boolnq13Kk = await TPACiems2m.transferFrom.call(addresswLjbc4H, addresszTXLCdi, uintVzZD9Se, {from: accounts[5]});

		assert.equal(boolD3KLPAX, false)
		assert.equal(uint256ugcslrs, BigInt("10000000000000000000000000000"))
		assert.equal(uint8FPqvvb, BigInt("18"))
		await expect(TPACiems2m.unlock.call(addresszQgkd5w, uinthQfDKbf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACiems2m = await TPA.new({from: accounts[4]});
		const addressSHEDC4 = accounts[4]
		const uintvHACLQs = BigInt("1803")
		const addresswjhN4LT = accounts[4]
		const uintEltUUdG = BigInt("1653")
		const addressUBLvMYZ = accounts[1]
		const addresslxJ9Qm = "0x0000000000000000000000000000000000000001"
		const boolKCQvJ8p = await TPACiems2m.isAdmin.call(addressSHEDC4, {from: accounts[3]});
		const boolZrITCsB = await TPACiems2m.paused.call({from: accounts[1]});
		const stringTldFl2j = await TPACiems2m.symbol.call({from: accounts[2]});
		const uint8FPqvvb = await TPACiems2m.decimals.call({from: accounts[4]});
		const boolYjEKIsl = await TPACiems2m.unlock.call(addresswjhN4LT, uintvHACLQs, {from: accounts[0]});
		const boolnq13Kk = await TPACiems2m.transferFrom.call(addresslxJ9Qm, addressUBLvMYZ, uintEltUUdG, {from: accounts[5]});

		assert.equal(boolKCQvJ8p, true)
		assert.equal(boolZrITCsB, false)
		assert.equal(stringTldFl2j, "TPA")
		assert.equal(uint8FPqvvb, BigInt("18"))
		await expect(TPACiems2m.unlock.call(addresswjhN4LT, uintvHACLQs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaxJO9ZG = await TPA.new({from: accounts[2]});
		const uintQMGKtsd = BigInt("1990")
		const addressQcdWl0j = accounts[4]
		const uintkL429UV = BigInt("1919")
		const uintGuzHj0V = BigInt("994")
		const addressFSKevNM = accounts[1]
		const uintUkE9yTJ = BigInt("1496")
		const addresscmQZBSR = accounts[4]
		const uintA9hL53W = BigInt("1565")
		const addressjQZOddn = accounts[0]
		const uintrVWdKnt = BigInt("752")
		const uintCDtQOjr = BigInt("538")
		const addressIE5l0cU = "0x0000000000000000000000000000000000000001"
		const boolNVVyOa = await TPAaxJO9ZG.approve.call(addressQcdWl0j, uintQMGKtsd, {from: accounts[1]});
		const boolzGWotVC = await TPAaxJO9ZG.lock.call(addressFSKevNM, uintGuzHj0V, uintkL429UV, {from: accounts[2]});
		const addressTJ5UazL = await TPAaxJO9ZG.burnFrom.call(addresscmQZBSR, uintUkE9yTJ, {from: accounts[2]});
		const boolaC7igDk = await TPAaxJO9ZG.transfer.call(addressjQZOddn, uintA9hL53W, {from: accounts[3]});
		const boolOpTwqg = await TPAaxJO9ZG.lock.call(addressIE5l0cU, uintCDtQOjr, uintrVWdKnt, {from: accounts[1]});

		assert.equal(boolNVVyOa, true)
		await expect(TPAaxJO9ZG.lock.call(addressFSKevNM, uintGuzHj0V, uintkL429UV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACiems2m = await TPA.new({from: accounts[4]});
		const uintREtXfTN = BigInt("195")
		const addressZFNawgZ = accounts[0]
		const uintN3ee8n = BigInt("2003")
		const addresssDIGKFr = accounts[4]
		const uintDv1CnX = BigInt("1653")
		const addressSQXLhs = accounts[1]
		const addressaxtWmxc = "0x0000000000000000000000000000000000000001"
		const uint8FPqvvb = await TPACiems2m.decimals.call({from: accounts[4]});
		const booli45ZnOr = await TPACiems2m.decreaseAllowance.call(addressZFNawgZ, uintREtXfTN, {from: accounts[0]});
		const boolYjEKIsl = await TPACiems2m.unlock.call(addresssDIGKFr, uintN3ee8n, {from: accounts[0]});
		const uint8nOKM3M9 = await TPACiems2m.decimals.call({from: accounts[4]});
		const boolnq13Kk = await TPACiems2m.transferFrom.call(addressaxtWmxc, addressSQXLhs, uintDv1CnX, {from: accounts[5]});

		assert.equal(uint8FPqvvb, BigInt("18"))
		await expect(TPACiems2m.decreaseAllowance.call(addressZFNawgZ, uintREtXfTN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACiems2m = await TPA.new({from: accounts[4]});
		const addressaMCvsuw = accounts[4]
		const uintYtGHl7g = BigInt("1653")
		const addressDc7Zr5p = accounts[1]
		const addressXr9PNIa = "0x0000000000000000000000000000000000000001"
		const boolKCQvJ8p = await TPACiems2m.isAdmin.call(addressaMCvsuw, {from: accounts[3]});
		const boolZrITCsB = await TPACiems2m.paused.call({from: accounts[1]});
		const stringTldFl2j = await TPACiems2m.symbol.call({from: accounts[2]});
		const uint8FPqvvb = await TPACiems2m.decimals.call({from: accounts[4]});
		const boolnq13Kk = await TPACiems2m.transferFrom.call(addressXr9PNIa, addressDc7Zr5p, uintYtGHl7g, {from: accounts[5]});

		assert.equal(boolKCQvJ8p, true)
		assert.equal(boolZrITCsB, false)
		assert.equal(stringTldFl2j, "TPA")
		assert.equal(uint8FPqvvb, BigInt("18"))
		await expect(TPACiems2m.transferFrom.call(addressXr9PNIa, addressDc7Zr5p, uintYtGHl7g, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACiems2m = await TPA.new({from: accounts[4]});
		const addressCQwzeck = accounts[4]
		const addressWFwVzR8 = accounts[3]
		const addressWArJ8TZ = accounts[5]
		const uintLhhwV3z = BigInt("1690")
		const addressrNhcuAx = accounts[1]
		const uint256SOGr9pr = await TPACiems2m.allowance.call(addressWFwVzR8, addressCQwzeck, {from: accounts[1]});
		const uint256Ab84z6j = await TPACiems2m.balanceOf.call(addressWArJ8TZ, {from: accounts[4]});
		const boolKSmjl1e = await TPACiems2m.transfer.call(addressrNhcuAx, uintLhhwV3z, {from: accounts[1]});
		const uint8FPqvvb = await TPACiems2m.decimals.call({from: accounts[4]});

		assert.equal(uint256Ab84z6j, BigInt("0"))
		assert.equal(uint256SOGr9pr, BigInt("0"))
		await expect(TPACiems2m.transfer.call(addressrNhcuAx, uintLhhwV3z, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACiems2m = await TPA.new({from: accounts[4]});
		const uintHthnb23 = BigInt("659")
		const uintb6hyRuu = BigInt("225")
		const addresshUEt5CV = accounts[1]
		const addressly5A9Re = accounts[2]
		const uintMN1Wq38 = BigInt("1803")
		const addressU73qq1 = accounts[4]
		const uintxSTxOoI = BigInt("1653")
		const addressZLQcd85 = accounts[1]
		const addresse6ryNUZ = "0x0000000000000000000000000000000000000001"
		const boolZrITCsB = await TPACiems2m.paused.call({from: accounts[1]});
		const uint256ynB5pr6 = await TPACiems2m.burn.call(uintHthnb23, {from: accounts[5]});
		const stringTldFl2j = await TPACiems2m.symbol.call({from: accounts[2]});
		const uint8FPqvvb = await TPACiems2m.decimals.call({from: accounts[4]});
		const boolfe8NlaD = await TPACiems2m.decreaseAllowance.call(addresshUEt5CV, uintb6hyRuu, {from: accounts[2]});
		const addresswBTTeqL = await TPACiems2m.upgradeTo.call(addressly5A9Re, {from: "0x0000000000000000000000000000000000000001"});
		const boolYjEKIsl = await TPACiems2m.unlock.call(addressU73qq1, uintMN1Wq38, {from: accounts[0]});
		const boolnq13Kk = await TPACiems2m.transferFrom.call(addresse6ryNUZ, addressZLQcd85, uintxSTxOoI, {from: accounts[5]});

		assert.equal(boolZrITCsB, false)
		await expect(TPACiems2m.burn.call(uintHthnb23, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACiems2m = await TPA.new({from: accounts[4]});
		const uintjirS4yU = BigInt("1962")
		const addressX8ebfMC = accounts[4]
		const uintInRTa9n = BigInt("1095")
		const address2aG4C8 = accounts[2]
		const addressnW2Rrd6 = accounts[3]
		const uintd1f6jeC = BigInt("1578")
		const addressHrHOGiJ = accounts[1]
		const addressMtOyF1S = accounts[0]
		const uintUrwyuE = BigInt("1653")
		const addressNi0USGP = accounts[1]
		const addressRHHyLMC = "0x0000000000000000000000000000000000000001"
		const stringUQodMC = await TPACiems2m.name.call({from: accounts[5]});
		const uint8FPqvvb = await TPACiems2m.decimals.call({from: accounts[4]});
		const boolYjEKIsl = await TPACiems2m.unlock.call(addressX8ebfMC, uintjirS4yU, {from: accounts[0]});
		const boolDnb1n8N = await TPACiems2m.transferFrom.call(addressnW2Rrd6, address2aG4C8, uintInRTa9n, {from: accounts[4]});
		const boolDsJw2EC = await TPACiems2m.transferFrom.call(addressMtOyF1S, addressHrHOGiJ, uintd1f6jeC, {from: accounts[3]});
		const boolnq13Kk = await TPACiems2m.transferFrom.call(addressRHHyLMC, addressNi0USGP, uintUrwyuE, {from: accounts[5]});

		assert.equal(stringUQodMC, "TPA")
		assert.equal(uint8FPqvvb, BigInt("18"))
		await expect(TPACiems2m.unlock.call(addressX8ebfMC, uintjirS4yU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPA5xd6Uk = await TPA.new({from: accounts[1]});
		const uintvZtWk0K = BigInt("519")
		const addressi0YXtad = accounts[3]
		const stringuYayqTO = await TPA5xd6Uk.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolIgBWWtS = await TPA5xd6Uk.increaseAllowance.call(addressi0YXtad, uintvZtWk0K, {from: accounts[1]});
		const uint256mVmYZZd = await TPA5xd6Uk.totalSupply.call({from: accounts[3]});

		assert.equal(boolIgBWWtS, true)
		assert.equal(stringuYayqTO, "TPA")
		assert.equal(uint256mVmYZZd, BigInt("10000000000000000000000000000"))
	});

	it('test for TPA', async () => {
		const TPAN5KofSG = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const addresssvj7xa3 = accounts[4]
		const uintknoOdyX = BigInt("1792")
		const addressjJvT4IK = accounts[5]
		const addressaLZLTD5 = accounts[0]
		const addressxV5mmE = accounts[1]
		const addressZR009Eq = accounts[3]
		const addressozV50gG = await TPAN5KofSG.upgradeTo.call(addresssvj7xa3, {from: accounts[1]});
		const boolVKhjwmq = await TPAN5KofSG.unlock.call(addressjJvT4IK, uintknoOdyX, {from: accounts[3]});
		const boolC5AVCmy = await TPAN5KofSG.isAdmin.call(addressaLZLTD5, {from: accounts[5]});
		const boolCDXw4G3 = await TPAN5KofSG.isOwner.call(addressxV5mmE, {from: accounts[1]});
		const addressezAuctc = await TPAN5KofSG.upgradeTo.call(addressZR009Eq, {from: accounts[5]});
	});

	it('test for TPA', async () => {
		const TPACiems2m = await TPA.new({from: accounts[4]});
		const addressyGGpWVW = accounts[4]
		const addressRiiVuWX = accounts[3]
		const addressYcOQceA = accounts[6]
		const uint9ZCNfG = BigInt("1690")
		const addressFxI88bu = accounts[1]
		const uint256SOGr9pr = await TPACiems2m.allowance.call(addressRiiVuWX, addressyGGpWVW, {from: accounts[1]});
		const uint256Ab84z6j = await TPACiems2m.balanceOf.call(addressYcOQceA, {from: accounts[4]});
		await TPACiems2m.renounceAdmin.call({from: accounts[0]});
		const boolKSmjl1e = await TPACiems2m.transfer.call(addressFxI88bu, uint9ZCNfG, {from: accounts[1]});
		const uint8FPqvvb = await TPACiems2m.decimals.call({from: accounts[4]});

		assert.equal(uint256Ab84z6j, BigInt("0"))
		assert.equal(uint256SOGr9pr, BigInt("0"))
		await expect(TPACiems2m.renounceAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACiems2m = await TPA.new({from: accounts[4]});
		const addressZYtK0p8 = accounts[5]
		const addressOny3fNC = accounts[0]
		const addressxd3CuWU = accounts[0]
		const addressVn751fK = accounts[4]
		const addressRVVQLcB = accounts[1]
		const uintu8c4RVi = BigInt("1978")
		const addresslLh0tvn = accounts[1]
		const uint256Ab84z6j = await TPACiems2m.balanceOf.call(addressZYtK0p8, {from: accounts[4]});
		const uint256U5qcRwz = await TPACiems2m.allowance.call(addressxd3CuWU, addressOny3fNC, {from: accounts[0]});
		const uint256UGHF4Vm = await TPACiems2m.allowance.call(addressRVVQLcB, addressVn751fK, {from: accounts[2]});
		const boolrWEhE2L = await TPACiems2m.unlock.call(addresslLh0tvn, uintu8c4RVi, {from: accounts[4]});
		await TPACiems2m.unpause.call({from: accounts[1]});
		const uint8FPqvvb = await TPACiems2m.decimals.call({from: accounts[4]});

		assert.equal(uint256Ab84z6j, BigInt("0"))
		assert.equal(uint256U5qcRwz, BigInt("0"))
		assert.equal(uint256UGHF4Vm, BigInt("0"))
		await expect(TPACiems2m.unlock.call(addresslLh0tvn, uintu8c4RVi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACiems2m = await TPA.new({from: accounts[4]});
		const uintQRhWPsU = BigInt("1992")
		const uintpxuqGb = BigInt("516")
		const addressy3gma6K = "0x0000000000000000000000000000000000000001"
		const uintJp89Kwg = BigInt("1653")
		const addresskDRQTNL = accounts[1]
		const addressyi0aGww = "0x0000000000000000000000000000000000000000"
		const uint256l5SiXjH = await TPACiems2m.burn.call(uintQRhWPsU, {from: accounts[4]});
		const stringTldFl2j = await TPACiems2m.symbol.call({from: accounts[2]});
		const addressRJXh6zr = await TPACiems2m.burnFrom.call(addressy3gma6K, uintpxuqGb, {from: accounts[2]});
		const boolnq13Kk = await TPACiems2m.transferFrom.call(addressyi0aGww, addresskDRQTNL, uintJp89Kwg, {from: accounts[5]});

		assert.equal(stringTldFl2j, "TPA")
		await expect(TPACiems2m.burnFrom.call(addressy3gma6K, uintpxuqGb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACiems2m = await TPA.new({from: accounts[4]});
		const addresscdMpSA = accounts[4]
		const uintMhtSciS = BigInt("609")
		const addressPOBB6j8 = accounts[1]
		const addresszc0AUj8 = accounts[5]
		const addressPCMVtTp = accounts[3]
		const uintJelBIEO = BigInt("915")
		const addressr7WIybQ = accounts[3]
		const uintDPvzD9m = BigInt("1653")
		const addressiS91ip2 = accounts[2]
		const addressUZVQIf = "0x0000000000000000000000000000000000000001"
		const boolKCQvJ8p = await TPACiems2m.isAdmin.call(addresscdMpSA, {from: accounts[3]});
		const booliFxPJJ0 = await TPACiems2m.increaseAllowance.call(addressPOBB6j8, uintMhtSciS, {from: accounts[1]});
		const boolZrITCsB = await TPACiems2m.paused.call({from: accounts[1]});
		const stringTldFl2j = await TPACiems2m.symbol.call({from: accounts[2]});
		const addressW3gmSCE = await TPACiems2m.addAdmin.call(addresszc0AUj8, {from: accounts[4]});
		const uint8FPqvvb = await TPACiems2m.decimals.call({from: accounts[4]});
		const addresssZt8zsJ = await TPACiems2m.notFrozen.call(addressPCMVtTp, {from: accounts[0]});
		const uint256OFTGjHH = await TPACiems2m.totalSupply.call({from: accounts[4]});
		const boolPoVDvZ = await TPACiems2m.transfer.call(addressr7WIybQ, uintJelBIEO, {from: accounts[4]});
		const boolnq13Kk = await TPACiems2m.transferFrom.call(addressUZVQIf, addressiS91ip2, uintDPvzD9m, {from: accounts[5]});

		assert.equal(boolKCQvJ8p, true)
		assert.equal(boolZrITCsB, false)
		assert.equal(booliFxPJJ0, true)
		assert.equal(stringTldFl2j, "TPA")
		assert.equal(uint8FPqvvb, BigInt("18"))
		await expect(TPACiems2m.notFrozen.call(addressPCMVtTp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACiems2m = await TPA.new({from: accounts[4]});
		const addressbLTDOkg = accounts[5]
		const addressaJ0fYdj = accounts[1]
		const uintCvEVXwo = BigInt("1198")
		const addressFgIvYqO = accounts[4]
		const addressZjRHaaD = accounts[3]
		const address4VlF1Q = accounts[5]
		const addressjqbN84 = accounts[0]
		const uintyV32y9 = BigInt("886")
		const addressvwPYgEy = accounts[4]
		const uinti8ppAg2 = BigInt("1653")
		const addressGqffLDs = accounts[1]
		const addressHtTh4k0 = "0x0000000000000000000000000000000000000001"
		const boolKCQvJ8p = await TPACiems2m.isAdmin.call(addressbLTDOkg, {from: accounts[3]});
		const boolZrITCsB = await TPACiems2m.paused.call({from: accounts[1]});
		const uint256Ga6srKt = await TPACiems2m.balanceOf.call(addressaJ0fYdj, {from: accounts[4]});
		const boola47HsVc = await TPACiems2m.approve.call(addressFgIvYqO, uintCvEVXwo, {from: accounts[1]});
		const booluAmuUZ = await TPACiems2m.freezeAccount.call(addressZjRHaaD, {from: accounts[4]});
		const stringTldFl2j = await TPACiems2m.symbol.call({from: accounts[2]});
		const addresso5vbPp = await TPACiems2m.removeAdmin.call(address4VlF1Q, {from: accounts[4]});
		const boolDD8UlOB = await TPACiems2m.isOwner.call(addressjqbN84, {from: "0x0000000000000000000000000000000000000001"});
		await TPACiems2m.whenPaused.call({from: accounts[4]});
		const uint8FPqvvb = await TPACiems2m.decimals.call({from: accounts[4]});
		const boolPoVDvZ = await TPACiems2m.transfer.call(addressvwPYgEy, uintyV32y9, {from: accounts[4]});
		const boolnq13Kk = await TPACiems2m.transferFrom.call(addressHtTh4k0, addressGqffLDs, uinti8ppAg2, {from: accounts[5]});

		assert.equal(boolKCQvJ8p, false)
		assert.equal(boolZrITCsB, false)
		assert.equal(boola47HsVc, true)
		assert.equal(booluAmuUZ, true)
		assert.equal(stringTldFl2j, "TPA")
		assert.equal(uint256Ga6srKt, BigInt("0"))
		await expect(TPACiems2m.removeAdmin.call(address4VlF1Q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})