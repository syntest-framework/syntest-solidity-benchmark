const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const TPArQX8pte = await TPA.new({from: accounts[1]});
		const uintLXZjLY1 = BigInt("1740")
		const uintqzXXqo = BigInt("12")
		const addressIL9772T = accounts[2]
		const addressXiXtN4I = accounts[5]
		const addresscxQlrvH = accounts[3]
		const addressmzuhX18 = accounts[0]
//		await TPArQX8pte.onlyAdmin.call({from: accounts[2]});
//		await TPArQX8pte.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolHZdjW2 = await TPArQX8pte.transferWithLock.call(addressIL9772T, uintqzXXqo, uintLXZjLY1, {from: accounts[5]});
//		const addresskqRo4c4 = await TPArQX8pte.notFrozen.call(addressXiXtN4I, {from: accounts[1]});
//		const uint256wL0rdsh = await TPArQX8pte.allowance.call(addressmzuhX18, addresscxQlrvH, {from: accounts[2]});

		await expect(TPArQX8pte.onlyAdmin.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAAFeaI7 = await TPA.new({from: accounts[2]});
		const addressOxW8uz = accounts[4]
		const addresswJFDxkq = accounts[3]
		const addressxsQpO4J = accounts[3]
//		await TPAAFeaI7.renounceAdmin.call({from: accounts[3]});
//		const boolI304v9 = await TPAAFeaI7.isOwner.call(addressOxW8uz, {from: accounts[2]});
//		const uint256CG4Gv5q = await TPAAFeaI7.allowance.call(addressxsQpO4J, addresswJFDxkq, {from: accounts[2]});

		await expect(TPAAFeaI7.renounceAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAtJqexc = await TPA.new({from: accounts[0]});
		const addressqIN58l7 = accounts[0]
		const uintEXWxgv = BigInt("1531")
		const addressGw0sQBQ = accounts[1]
		const uintvKEkRI = BigInt("1097")
		const addressey7G4W = accounts[2]
		const addressZbBEMxh = accounts[4]
		const addressIlQ6EH = accounts[0]
		const uint256dXfQGz6 = await TPAtJqexc.balanceOf.call(addressqIN58l7, {from: accounts[4]});
		const uint8ZDYmva5 = await TPAtJqexc.decimals.call({from: accounts[0]});
		const boolWM41efh = await TPAtJqexc.approve.call(addressGw0sQBQ, uintEXWxgv, {from: accounts[3]});
//		const boolNC7BHTV = await TPAtJqexc.transferFrom.call(addressZbBEMxh, addressey7G4W, uintvKEkRI, {from: accounts[2]});
//		const bool0UkZ7Z = await TPAtJqexc.freezeAccount.call(addressIlQ6EH, {from: accounts[0]});

		assert.equal(boolWM41efh, true)
		assert.equal(uint256dXfQGz6, BigInt("10000000000000000000000000000"))
		assert.equal(uint8ZDYmva5, BigInt("18"))
		await expect(TPAtJqexc.transferFrom.call(addressZbBEMxh, addressey7G4W, uintvKEkRI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const strings0vnseh = "p3MwlpbVnPw052jsMkhFlWhfBG5hHhMTeITgG528RXdASubbNEM7KLcaU1OcM"
		const stringmJmguhm = "rfYkjbT1yK"
		const uintpTJiO06 = BigInt("53")
		const TPAkgquu4 = await TPA.new(strings0vnseh, stringmJmguhm, uintpTJiO06, {from: accounts[1]});
		const uintH2sGF29 = BigInt("1045")
		const addressFja1bZg = accounts[1]
		const addressz45Cc7J = accounts[0]
		const addressDkkhFd = accounts[1]
		const addressK4K0y89 = accounts[3]
		const uintwGIKfN = BigInt("484")
		const addressIud73Ad = accounts[2]
		const boolPfb8FH = await TPAkgquu4.transferFrom.call(addressz45Cc7J, addressFja1bZg, uintH2sGF29, {from: accounts[4]});
		const stringRgmhIlz = await TPAkgquu4.symbol.call({from: accounts[4]});
		const uint256p8AK5iC = await TPAkgquu4.balanceOf.call(addressDkkhFd, {from: accounts[3]});
		const boolgpwRL0 = await TPAkgquu4.unfreezeAccount.call(addressK4K0y89, {from: accounts[4]});
		const boolSnJqR6I = await TPAkgquu4.decreaseAllowance.call(addressIud73Ad, uintwGIKfN, {from: accounts[0]});
	});

	it('test for TPA', async () => {
		const TPAudStR8T = await TPA.new({from: accounts[0]});
		const uintItOJl4k = BigInt("241")
		const uintDqmgR2e = BigInt("394")
		const stringiIedp55 = await TPAudStR8T.symbol.call({from: accounts[2]});
//		const uint256j9WrfZO = await TPAudStR8T.burn.call(uintItOJl4k, {from: accounts[2]});
//		await TPAudStR8T.pause.call({from: accounts[2]});
//		const uint256PmkWiEy = await TPAudStR8T.burn.call(uintDqmgR2e, {from: accounts[1]});
//		await TPAudStR8T.onlyAdmin.call({from: accounts[1]});

		assert.equal(stringiIedp55, "TPA")
		await expect(TPAudStR8T.burn.call(uintItOJl4k, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAtJqexc = await TPA.new({from: accounts[0]});
		const addressVXyXexz = accounts[0]
		const addressnRSxbLv = accounts[0]
		const uintCeuQnhK = BigInt("1531")
		const addressLBRgbZw = accounts[1]
		const uintmbipXed = BigInt("1097")
		const addressxtYcALN = accounts[2]
		const addressPQ8Re4 = accounts[4]
		const address0F1Kfj = accounts[1]
		const boolZjDLRAc = await TPAtJqexc.freezeAccount.call(addressVXyXexz, {from: accounts[0]});
		const uint256dXfQGz6 = await TPAtJqexc.balanceOf.call(addressnRSxbLv, {from: accounts[4]});
		const uint8ZDYmva5 = await TPAtJqexc.decimals.call({from: accounts[0]});
		const boolWM41efh = await TPAtJqexc.approve.call(addressLBRgbZw, uintCeuQnhK, {from: accounts[3]});
//		const boolNC7BHTV = await TPAtJqexc.transferFrom.call(addressPQ8Re4, addressxtYcALN, uintmbipXed, {from: accounts[2]});
//		const bool0UkZ7Z = await TPAtJqexc.freezeAccount.call(address0F1Kfj, {from: accounts[0]});

		assert.equal(boolWM41efh, true)
		assert.equal(boolZjDLRAc, true)
		assert.equal(uint256dXfQGz6, BigInt("10000000000000000000000000000"))
		assert.equal(uint8ZDYmva5, BigInt("18"))
		await expect(TPAtJqexc.transferFrom.call(addressPQ8Re4, addressxtYcALN, uintmbipXed, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAAFeaI7 = await TPA.new({from: accounts[2]});
		const addresse023gDn = accounts[5]
		const addressHgJJy1b = accounts[3]
		const addressQd6JpQ = accounts[3]
		const addressDJtaT0A = accounts[1]
		const boolI304v9 = await TPAAFeaI7.isOwner.call(addresse023gDn, {from: accounts[2]});
		const uint256CG4Gv5q = await TPAAFeaI7.allowance.call(addressQd6JpQ, addressHgJJy1b, {from: accounts[2]});
//		const addressLEAP42m = await TPAAFeaI7.notFrozen.call(addressDJtaT0A, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolI304v9, false)
		assert.equal(uint256CG4Gv5q, BigInt("0"))
		await expect(TPAAFeaI7.notFrozen.call(addressDJtaT0A, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAAFeaI7 = await TPA.new({from: accounts[2]});
		const addressCI15l89 = accounts[6]
		const uintfJgl6gj = BigInt("1120")
		const addresslm5DZDO = accounts[2]
		const addresskT4MpUD = accounts[3]
		const addressDVJU8nm = accounts[3]
		const addressqcgnkcf = accounts[1]
		const boolI304v9 = await TPAAFeaI7.isOwner.call(addressCI15l89, {from: accounts[2]});
//		const boolvAkn0XV = await TPAAFeaI7.transfer.call(addresslm5DZDO, uintfJgl6gj, {from: accounts[1]});
//		const uint256CG4Gv5q = await TPAAFeaI7.allowance.call(addressDVJU8nm, addresskT4MpUD, {from: accounts[2]});
//		const addressLEAP42m = await TPAAFeaI7.notFrozen.call(addressqcgnkcf, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolI304v9, false)
		await expect(TPAAFeaI7.transfer.call(addresslm5DZDO, uintfJgl6gj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAAFeaI7 = await TPA.new({from: accounts[2]});
		const uintAYZ58nR = BigInt("663")
		const addressRLNPvK = accounts[0]
		const addresscDZGFDt = accounts[6]
		const addressshCghvm = accounts[3]
		const addressEvbPmsO = accounts[3]
		const uinthu5qY5q = BigInt("175")
		const addressu9XF8lx = accounts[1]
		const addressuhb8sUm = accounts[1]
		const boolP1leWMy = await TPAAFeaI7.increaseAllowance.call(addressRLNPvK, uintAYZ58nR, {from: accounts[2]});
		const boolI304v9 = await TPAAFeaI7.isOwner.call(addresscDZGFDt, {from: accounts[2]});
//		await TPAAFeaI7.onlyAdmin.call({from: accounts[1]});
//		const uint256CG4Gv5q = await TPAAFeaI7.allowance.call(addressEvbPmsO, addressshCghvm, {from: accounts[2]});
//		const boolue2UCH = await TPAAFeaI7.transfer.call(addressu9XF8lx, uinthu5qY5q, {from: accounts[5]});
//		const addressLEAP42m = await TPAAFeaI7.notFrozen.call(addressuhb8sUm, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolI304v9, false)
		assert.equal(boolP1leWMy, true)
		await expect(TPAAFeaI7.onlyAdmin.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAc8c1Qr = await TPA.new({from: accounts[5]});
		const addressUGolSzc = accounts[0]
		const addressPLBt7Gd = accounts[5]
		const uintfzUWYWM = BigInt("237")
		const addressQONPVHR = accounts[3]
		const addressSfVFnrm = accounts[4]
		const addressGg8uXYu = accounts[3]
		const addresszsPYFmx = await TPAc8c1Qr.addAdmin.call(addressUGolSzc, {from: accounts[5]});
//		const boolFIMmUyl = await TPAc8c1Qr.unfreezeAccount.call(addressPLBt7Gd, {from: accounts[0]});
//		const boolZ9otf2W = await TPAc8c1Qr.decreaseAllowance.call(addressQONPVHR, uintfzUWYWM, {from: accounts[1]});
//		const uint256wUHeOMo = await TPAc8c1Qr.balanceOf.call(addressSfVFnrm, {from: accounts[1]});
//		const addressqQBSvPI = await TPAc8c1Qr.addAdmin.call(addressGg8uXYu, {from: accounts[4]});
//		const stringmsId55 = await TPAc8c1Qr.symbol.call({from: accounts[2]});

		await expect(TPAc8c1Qr.unfreezeAccount.call(addressPLBt7Gd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAtJqexc = await TPA.new({from: accounts[0]});
		const addressXJEN1TC = accounts[1]
		const addressvwG7W9I = accounts[5]
		const uintgOMuApX = BigInt("1097")
		const addressDCNq3q = accounts[3]
		const addresshYyF2OL = accounts[4]
		const uint256dXfQGz6 = await TPAtJqexc.balanceOf.call(addressXJEN1TC, {from: accounts[4]});
//		const addressvgsYtM7 = await TPAtJqexc.removeAdmin.call(addressvwG7W9I, {from: accounts[0]});
//		const boolNC7BHTV = await TPAtJqexc.transferFrom.call(addresshYyF2OL, addressDCNq3q, uintgOMuApX, {from: accounts[2]});

		assert.equal(uint256dXfQGz6, BigInt("0"))
		await expect(TPAtJqexc.removeAdmin.call(addressvwG7W9I, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAAFeaI7 = await TPA.new({from: accounts[2]});
		const uintemGYaDS = BigInt("1900")
		const addressCL8t2sT = accounts[0]
		const uinthfA8EvP = BigInt("1434")
		const addressIB8vcV6 = accounts[4]
//		const boolKZhSu5n = await TPAAFeaI7.decreaseAllowance.call(addressCL8t2sT, uintemGYaDS, {from: accounts[4]});
//		const boolfS7tJ8l = await TPAAFeaI7.transfer.call(addressIB8vcV6, uinthfA8EvP, {from: accounts[1]});
//		await TPAAFeaI7.unpause.call({from: accounts[4]});
//		await TPAAFeaI7.renounceAdmin.call({from: accounts[3]});

		await expect(TPAAFeaI7.decreaseAllowance.call(addressCL8t2sT, uintemGYaDS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAQJCagg0 = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const uintLFnRi8R = BigInt("518")
		const addressEilTulx = "0x0000000000000000000000000000000000000001"
		const addressRYCvORF = accounts[4]
		const uintpDp5705 = BigInt("1448")
		const address2UVWcV = accounts[4]
		const uinttf3w497 = BigInt("539")
		const uintvFqZKSJ = BigInt("642")
		const addresswm3z2qH = accounts[0]
		const uintwWkwMTw = BigInt("1998")
		const addressD699x41 = accounts[4]
		const addressARNg2uu = "0x0000000000000000000000000000000000000001"
		const boolILl3BbX = await TPAQJCagg0.transferFrom.call(addressRYCvORF, addressEilTulx, uintLFnRi8R, {from: accounts[2]});
		const boolylwtvfV = await TPAQJCagg0.increaseAllowance.call(address2UVWcV, uintpDp5705, {from: accounts[4]});
		const boolUwoMKE = await TPAQJCagg0.transferWithLock.call(addresswm3z2qH, uintvFqZKSJ, uinttf3w497, {from: accounts[0]});
		const addresstlNSrTZ = await TPAQJCagg0.burnFrom.call(addressD699x41, uintwWkwMTw, {from: accounts[5]});
		const uint256I9lldFe = await TPAQJCagg0.balanceOf.call(addressARNg2uu, {from: accounts[4]});
		await TPAQJCagg0.onlyAdmin.call({from: accounts[5]});
	});

	it('test for TPA', async () => {
		const TPAAFeaI7 = await TPA.new({from: accounts[2]});
		const addressD8V7rUq = accounts[5]
		const addressglZvirY = accounts[4]
		const addressesprHli = accounts[3]
		const addressLoR1YDQ = accounts[1]
		const boolI304v9 = await TPAAFeaI7.isOwner.call(addressD8V7rUq, {from: accounts[2]});
		const boolKRJwDPs = await TPAAFeaI7.paused.call({from: accounts[1]});
//		await TPAAFeaI7.unpause.call({from: accounts[5]});
//		const uint256CG4Gv5q = await TPAAFeaI7.allowance.call(addressesprHli, addressglZvirY, {from: accounts[2]});
//		const addressLEAP42m = await TPAAFeaI7.notFrozen.call(addressLoR1YDQ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolI304v9, false)
		assert.equal(boolKRJwDPs, false)
		await expect(TPAAFeaI7.unpause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAAFeaI7 = await TPA.new({from: accounts[2]});
		const addressdI9SNNX = accounts[2]
		const uint256MJINkLF = await TPAAFeaI7.balanceOf.call(addressdI9SNNX, {from: accounts[0]});
//		await TPAAFeaI7.pause.call({from: accounts[2]});
//		await TPAAFeaI7.renounceAdmin.call({from: accounts[3]});

		assert.equal(uint256MJINkLF, BigInt("10000000000000000000000000000"))
		await expect(TPAAFeaI7.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAtJqexc = await TPA.new({from: accounts[0]});
		const addresseedkLj6 = accounts[0]
		const uintMOtHQg = BigInt("1813")
		const addressBr0JeHT = accounts[2]
		const addressrktRQhB = accounts[0]
		const uintmJfqTvr = BigInt("1097")
		const address3BNxUt = accounts[3]
		const addressurR3Vg = accounts[4]
		const addressb8Ulij = accounts[0]
		const uint256dXfQGz6 = await TPAtJqexc.balanceOf.call(addresseedkLj6, {from: accounts[4]});
		const uint8ZDYmva5 = await TPAtJqexc.decimals.call({from: accounts[0]});
		const boolZGjIcK = await TPAtJqexc.approve.call(addressBr0JeHT, uintMOtHQg, {from: accounts[3]});
		const address8uT64v = await TPAtJqexc.upgradeTo.call(addressrktRQhB, {from: accounts[0]});
//		const boolNC7BHTV = await TPAtJqexc.transferFrom.call(addressurR3Vg, address3BNxUt, uintmJfqTvr, {from: accounts[2]});
//		const uint256Wb7sBVi = await TPAtJqexc.balanceOf.call(addressb8Ulij, {from: accounts[3]});

		assert.equal(boolZGjIcK, true)
		assert.equal(uint256dXfQGz6, BigInt("10000000000000000000000000000"))
		assert.equal(uint8ZDYmva5, BigInt("18"))
		await expect(TPAtJqexc.transferFrom.call(addressurR3Vg, address3BNxUt, uintmJfqTvr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAtJqexc = await TPA.new({from: accounts[0]});
		const addresse1DMSwY = accounts[0]
		const uintd4akhrS = BigInt("1441")
		const addressvjVuzSr = accounts[4]
		const uintcDoRlV6 = BigInt("1097")
		const addressJr9AFa = accounts[3]
		const addressGANrpyc = accounts[5]
		const uint256dXfQGz6 = await TPAtJqexc.balanceOf.call(addresse1DMSwY, {from: accounts[4]});
//		const boolYBHoQo = await TPAtJqexc.unlock.call(addressvjVuzSr, uintd4akhrS, {from: accounts[0]});
//		const boolNC7BHTV = await TPAtJqexc.transferFrom.call(addressGANrpyc, addressJr9AFa, uintcDoRlV6, {from: accounts[2]});

		assert.equal(uint256dXfQGz6, BigInt("10000000000000000000000000000"))
		await expect(TPAtJqexc.unlock.call(addressvjVuzSr, uintd4akhrS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAu56c64W = await TPA.new({from: accounts[0]});
		const uintJCaG61N = BigInt("532")
		const addresszvpBsbg = accounts[1]
		const uintG83wF0h = BigInt("1665")
		const addressCqJlhma = accounts[3]
		const uint7a1IWY = BigInt("1083")
		const addressIg41Klq = accounts[2]
		const stringo27f7SJ = await TPAu56c64W.symbol.call({from: accounts[2]});
//		const addressM8zI5OD = await TPAu56c64W.burnFrom.call(addresszvpBsbg, uintJCaG61N, {from: "0x0000000000000000000000000000000000000001"});
//		const boolRExGYru = await TPAu56c64W.transfer.call(addressCqJlhma, uintG83wF0h, {from: accounts[2]});
//		const boolUZruiHP = await TPAu56c64W.approve.call(addressIg41Klq, uint7a1IWY, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringo27f7SJ, "TPA")
		await expect(TPAu56c64W.burnFrom.call(addresszvpBsbg, uintJCaG61N, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAAFeaI7 = await TPA.new({from: accounts[2]});
		const uintlyjTsU = BigInt("1130")
		const addressM6ms3BN = accounts[4]
		const uintPh86TG9 = BigInt("497")
		const uintmPWsd2O = BigInt("354")
		const addressImpJvap = accounts[1]
		const stringgYJI3g6 = await TPAAFeaI7.name.call({from: accounts[3]});
//		const boollpLAb2o = await TPAAFeaI7.unlock.call(addressM6ms3BN, uintlyjTsU, {from: "0x0000000000000000000000000000000000000001"});
//		const boolYTUITHc = await TPAAFeaI7.transferWithLock.call(addressImpJvap, uintmPWsd2O, uintPh86TG9, {from: accounts[0]});

		assert.equal(stringgYJI3g6, "TPA")
		await expect(TPAAFeaI7.unlock.call(addressM6ms3BN, uintlyjTsU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAAFeaI7 = await TPA.new({from: accounts[2]});
		const uintBhpOcm8 = BigInt("829")
		const uintBYCtZJe = BigInt("232")
		const addressIP4aqtg = accounts[0]
		const uintE2f0Qz = BigInt("1530")
		const addressnDKDb2W = accounts[1]
		const addressYQvn5LF = accounts[3]
		const boolOEwYngX = await TPAAFeaI7.transferWithLock.call(addressIP4aqtg, uintBYCtZJe, uintBhpOcm8, {from: accounts[2]});
//		const boolCwGQ65o = await TPAAFeaI7.transfer.call(addressnDKDb2W, uintE2f0Qz, {from: accounts[5]});
//		const boolBp99Jcm = await TPAAFeaI7.freezeAccount.call(addressYQvn5LF, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolOEwYngX, true)
		await expect(TPAAFeaI7.transfer.call(addressnDKDb2W, uintE2f0Qz, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAAFeaI7 = await TPA.new({from: accounts[2]});
		const addressdoI1MVg = accounts[2]
		const uintqPvhWoj = BigInt("1802")
		const addressa2OVihG = accounts[3]
		const uint256c8EMcsR = await TPAAFeaI7.totalSupply.call({from: accounts[4]});
		const uint256MJINkLF = await TPAAFeaI7.balanceOf.call(addressdoI1MVg, {from: accounts[0]});
//		await TPAAFeaI7.pause.call({from: accounts[2]});
//		const booldWUj6s1 = await TPAAFeaI7.increaseAllowance.call(addressa2OVihG, uintqPvhWoj, {from: accounts[2]});
//		await TPAAFeaI7.renounceAdmin.call({from: accounts[3]});

		assert.equal(uint256MJINkLF, BigInt("10000000000000000000000000000"))
		assert.equal(uint256c8EMcsR, BigInt("10000000000000000000000000000"))
		await expect(TPAAFeaI7.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAAFeaI7 = await TPA.new({from: accounts[2]});
		const addressMAXTQY = accounts[2]
		const addressf8B2l6H = accounts[4]
		const addressIsznNr = await TPAAFeaI7.transferOwnership.call(addressMAXTQY, {from: accounts[2]});
		const uint256aHiLo2c = await TPAAFeaI7.totalSupply.call({from: accounts[3]});
//		const addressd2vibQU = await TPAAFeaI7.removeAdmin.call(addressf8B2l6H, {from: "0x0000000000000000000000000000000000000001"});
//		await TPAAFeaI7.renounceAdmin.call({from: accounts[3]});

		assert.equal(uint256aHiLo2c, BigInt("10000000000000000000000000000"))
		await expect(TPAAFeaI7.removeAdmin.call(addressf8B2l6H, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAAFeaI7 = await TPA.new({from: accounts[2]});
		const addressR5eDthe = accounts[4]
		const uinteHe7YaQ = BigInt("1530")
		const addressiU3rZ5z = accounts[1]
//		const boolaZPoPqF = await TPAAFeaI7.unfreezeAccount.call(addressR5eDthe, {from: accounts[2]});
//		await TPAAFeaI7.pause.call({from: accounts[4]});
//		const boolCwGQ65o = await TPAAFeaI7.transfer.call(addressiU3rZ5z, uinteHe7YaQ, {from: accounts[5]});

		await expect(TPAAFeaI7.unfreezeAccount.call(addressR5eDthe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAtJqexc = await TPA.new({from: accounts[0]});
		const addresslmzdYU0 = accounts[1]
		const uint256dXfQGz6 = await TPAtJqexc.balanceOf.call(addresslmzdYU0, {from: accounts[4]});
//		await TPAtJqexc.renounceAdmin.call({from: accounts[0]});

		assert.equal(uint256dXfQGz6, BigInt("0"))
		await expect(TPAtJqexc.renounceAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})