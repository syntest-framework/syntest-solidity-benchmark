const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100kLuW1Kf = await Token50X100.new({from: accounts[5]});
		const boolNSJSs7e = false
		const addressEUmtGlk = accounts[5]
		const uintgbhuW8T = BigInt("149")
		const uintUAjhLtP = BigInt("677")
		const addresslNqa5u = accounts[3]
		const addressv7kIw7s = accounts[4]
		const addressm04N3NO = accounts[2]
		const addressLqdevY9 = accounts[3]
//		await Token50X100kLuW1Kf.setWhiteListReceivers.call(addressEUmtGlk, boolNSJSs7e, {from: "0x0000000000000000000000000000000000000001"});
//		const boolbvBMNZc = await Token50X100kLuW1Kf._transfer.call(addressv7kIw7s, addresslNqa5u, uintUAjhLtP, uintgbhuW8T, {from: accounts[1]});
//		await Token50X100kLuW1Kf.setLinkingAddresses.call(addressLqdevY9, addressm04N3NO, {from: accounts[5]});

		await expect(Token50X100kLuW1Kf.setWhiteListReceivers.call(addressEUmtGlk, boolNSJSs7e, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100bBMCZvv = await Token50X100.new({from: accounts[2]});
		const address3HpZra = "0x0000000000000000000000000000000000000001"
		const uintsVrquFL = BigInt("718")
		const addresst4xqQu6 = accounts[3]
		const addressWILVzQH = accounts[4]
		const uintrh2cyjU = BigInt("257")
		const addresslmVPc4N = accounts[3]
		const addressbGAfVPW = accounts[3]
		const uintWRysXtN = BigInt("113")
		const uintj7Ymr78 = BigInt("1266")
		const addressbIcKCZY = accounts[1]
		const addressrDQHWIW = accounts[0]
		const addressaJr5rn = accounts[2]
		const addressL3Y003E = accounts[3]
		const uint256HZRaIUz = await Token50X100bBMCZvv.balanceOf.call(address3HpZra, {from: accounts[1]});
//		const boolcnSgQuB = await Token50X100bBMCZvv.issueTokens.call(addressWILVzQH, addresst4xqQu6, uintsVrquFL, {from: "0x0000000000000000000000000000000000000001"});
//		const boolUxuU8F6 = await Token50X100bBMCZvv.transferFrom.call(addressbGAfVPW, addresslmVPc4N, uintrh2cyjU, {from: accounts[4]});
//		const boolm9QViG2 = await Token50X100bBMCZvv._transfer.call(addressrDQHWIW, addressbIcKCZY, uintj7Ymr78, uintWRysXtN, {from: accounts[0]});
//		await Token50X100bBMCZvv.setLinkingAddresses.call(addressL3Y003E, addressaJr5rn, {from: accounts[5]});

		assert.equal(uint256HZRaIUz, BigInt("0"))
		await expect(Token50X100bBMCZvv.issueTokens.call(addressWILVzQH, addresst4xqQu6, uintsVrquFL, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100umBAtPR = await Token50X100.new({from: accounts[3]});
		const uintQq8hV9J = BigInt("202")
		const stringJQ849De = "XGrf1wT8rgsFfjKT2vSh"
		const stringMUWZdaf = "ks2IkhlglNA"
		const bool5IeZGW = false
		const addressOp0duhx = accounts[0]
		const addresscKxUs0 = accounts[2]
		const addressNyNLRwp = accounts[5]
		const boolkRozvOU = await Token50X100umBAtPR.setSymbolNameDecimals.call(stringMUWZdaf, stringJQ849De, uintQq8hV9J, {from: accounts[3]});
//		await Token50X100umBAtPR.setWhiteListReceivers.call(addressOp0duhx, bool5IeZGW, {from: accounts[3]});
//		await Token50X100umBAtPR.setTokenContract.call(addresscKxUs0, {from: accounts[3]});
//		const addressGZ0DjF9 = await Token50X100umBAtPR.transferOwnership.call(addressNyNLRwp, {from: accounts[1]});

		await expect(Token50X100umBAtPR.setWhiteListReceivers.call(addressOp0duhx, bool5IeZGW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Pyvy0Y2 = await Token50X100.new({from: accounts[2]});
		const uinteWSTKFd = BigInt("27")
		const addressJjlv2h2 = accounts[3]
		const uintYF0ePMC = BigInt("265")
		const addressOx1WDbI = accounts[2]
		const addressaGwFP88 = accounts[0]
		const boolMwrbot = await Token50X100Pyvy0Y2.setMaxLockPeriod.call(uinteWSTKFd, {from: accounts[4]});
//		const addresskUyvfxN = await Token50X100Pyvy0Y2.transferOwnership.call(addressJjlv2h2, {from: accounts[3]});
//		const boolkF6n3Tn = await Token50X100Pyvy0Y2.transferFrom.call(addressaGwFP88, addressOx1WDbI, uintYF0ePMC, {from: accounts[1]});

		assert.equal(boolMwrbot, false)
		await expect(Token50X100Pyvy0Y2.transferOwnership.call(addressJjlv2h2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Sri7jm1 = await Token50X100.new({from: accounts[4]});
		const uintnbtUsQg = BigInt("699")
		const addresstO7BL5c = accounts[3]
		const addresslr1kWaf = accounts[1]
		const uintHWRN4GM = BigInt("7")
		const addressnRVvEq9 = accounts[1]
		const uintdNgKUA = BigInt("1902")
		const addressXHKx9r2 = "0x0000000000000000000000000000000000000001"
		const boolYsobzxs = await Token50X100Sri7jm1.increaseApproval.call(addresstO7BL5c, uintnbtUsQg, {from: accounts[5]});
//		const addressRQYnr51 = await Token50X100Sri7jm1.setOriginalContract.call(addresslr1kWaf, {from: accounts[1]});
//		const boolxNADNkY = await Token50X100Sri7jm1.setMaxLockPeriod.call(uintHWRN4GM, {from: accounts[4]});
//		await Token50X100Sri7jm1.setTokenContract.call(addressnRVvEq9, {from: accounts[1]});
//		const boolwIOMkn = await Token50X100Sri7jm1.increaseApproval.call(addressXHKx9r2, uintdNgKUA, {from: accounts[0]});

		assert.equal(boolYsobzxs, true)
		await expect(Token50X100Sri7jm1.setOriginalContract.call(addresslr1kWaf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100aFzu9kO = await Token50X100.new({from: accounts[4]});
		const uintNy9jvds = BigInt("1527")
		const addressbAyJg1 = accounts[2]
		const addressan3I4XJ = accounts[3]
		const uintFWVqban = BigInt("225")
		const uintWPJR4ag = BigInt("644")
		const addressio59sNL = accounts[4]
		const uintYd3fpBC = BigInt("813")
		const uintQrUbZdS = BigInt("239")
		const addressmooEg8U = accounts[5]
		const boolCJqyje7 = true
		const addressrJ2lqO1 = accounts[4]
		const uintfqh8f90 = BigInt("218")
		const addressIJQtNO3 = accounts[0]
//		const boolNyw1PiK = await Token50X100aFzu9kO.transferFrom.call(addressan3I4XJ, addressbAyJg1, uintNy9jvds, {from: accounts[0]});
//		const boolDouA9Hf = await Token50X100aFzu9kO.setVesting.call(addressio59sNL, uintWPJR4ag, uintFWVqban, {from: accounts[0]});
//		const boolE0i9VzD = await Token50X100aFzu9kO.safeLock.call(uintQrUbZdS, uintYd3fpBC, {from: accounts[4]});
//		const addressAFPG3rY = await Token50X100aFzu9kO.transferOwnership.call(addressmooEg8U, {from: accounts[3]});
//		await Token50X100aFzu9kO.setWhiteListReceivers.call(addressrJ2lqO1, boolCJqyje7, {from: accounts[5]});
//		const boolhkOyAtI = await Token50X100aFzu9kO.decreaseApproval.call(addressIJQtNO3, uintfqh8f90, {from: accounts[2]});

		await expect(Token50X100aFzu9kO.transferFrom.call(addressan3I4XJ, addressbAyJg1, uintNy9jvds, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100GJSsyMc = await Token50X100.new({from: accounts[2]});
		const addresskjYnijy = accounts[3]
		const addressz8JMq8O = accounts[4]
		const uintXquXjgT = BigInt("1064")
		const addressG2HF7ts = accounts[3]
		const addressAfuUPb7 = accounts[5]
		const uint256Mpjk8jO = await Token50X100GJSsyMc.allowance.call(addressz8JMq8O, addresskjYnijy, {from: accounts[3]});
//		await Token50X100GJSsyMc.lock.call({from: accounts[0]});
//		const boolrG2Y4Ed = await Token50X100GJSsyMc.issueTokens.call(addressAfuUPb7, addressG2HF7ts, uintXquXjgT, {from: accounts[2]});

		assert.equal(uint256Mpjk8jO, BigInt("0"))
		await expect(Token50X100GJSsyMc.lock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100GJSsyMc = await Token50X100.new({from: accounts[2]});
		const addressusWiV2r = accounts[3]
		const addressHt8FJBC = accounts[4]
		const uintYwJpgnu = BigInt("1927")
		const addressH7Larzc = accounts[4]
		const uintiETRyF = BigInt("1652")
		const uintnbyUtYh = BigInt("102")
		const stringg5nBDbb = "BpTy8GG"
		const stringTSdEJve = "8rWsI7z98MzITKY5ulHk5wjJHxrKPuH4Z115D7p"
		const uintuqyCNwD = BigInt("1020")
		const addressyQRadNn = accounts[3]
		const addressco9YDvz = accounts[5]
		const uint256Mpjk8jO = await Token50X100GJSsyMc.allowance.call(addressHt8FJBC, addressusWiV2r, {from: accounts[3]});
//		const booleCx6FIB = await Token50X100GJSsyMc.transfer.call(addressH7Larzc, uintYwJpgnu, {from: accounts[0]});
//		await Token50X100GJSsyMc.lock.call({from: accounts[0]});
//		const boolMX62l5B = await Token50X100GJSsyMc.setMaxLockPeriod.call(uintiETRyF, {from: accounts[2]});
//		const boolt2lyUVc = await Token50X100GJSsyMc.setSymbolNameDecimals.call(stringTSdEJve, stringg5nBDbb, uintnbyUtYh, {from: accounts[0]});
//		const boolrG2Y4Ed = await Token50X100GJSsyMc.issueTokens.call(addressco9YDvz, addressyQRadNn, uintuqyCNwD, {from: accounts[2]});

		assert.equal(uint256Mpjk8jO, BigInt("0"))
		await expect(Token50X100GJSsyMc.transfer.call(addressH7Larzc, uintYwJpgnu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100GJSsyMc = await Token50X100.new({from: accounts[2]});
		const uintCoSZ6ES = BigInt("850")
		const addresshwfPrWJ = accounts[3]
		const addressKKeeZlJ = accounts[4]
		const uintW2I2kVv = BigInt("764")
		const addressKpmKhtA = accounts[3]
		const uinti0nsTJJ = BigInt("1064")
		const addressKZQLAIt = accounts[3]
		const addressmSZHxMO = accounts[5]
		const boolP91fzTf = await Token50X100GJSsyMc.setMaxLockPeriod.call(uintCoSZ6ES, {from: accounts[4]});
		const uint256Mpjk8jO = await Token50X100GJSsyMc.allowance.call(addressKKeeZlJ, addresshwfPrWJ, {from: accounts[3]});
		const bool8zN7YL = await Token50X100GJSsyMc.decreaseApproval.call(addressKpmKhtA, uintW2I2kVv, {from: accounts[4]});
//		await Token50X100GJSsyMc.lock.call({from: accounts[0]});
//		const boolrG2Y4Ed = await Token50X100GJSsyMc.issueTokens.call(addressmSZHxMO, addressKZQLAIt, uinti0nsTJJ, {from: accounts[2]});

		assert.equal(bool8zN7YL, true)
		assert.equal(boolP91fzTf, false)
		assert.equal(uint256Mpjk8jO, BigInt("0"))
		await expect(Token50X100GJSsyMc.lock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100RPEM9Fj = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const uintQYVZ3uT = BigInt("43")
		const stringY5VvV4i = "PxYcoh3eIdpBkh13o4EgL5o3I5C1QSh9SPGi8cHqLibegSB1vMFa5G2gCNCEYfTcl0FgtQBvwxhYeOUZFOYRM"
		const stringOBm14wn = "WhuXppWJQCvqadSvghFNVIn3cVUQsVcXH8IclCrFK0VbT76whfI4bY5J98Cbwn8rIuc3E2qmh8HD"
		const addressxjnUvXJ = accounts[3]
		const addressLDVUyp2 = accounts[4]
		await Token50X100RPEM9Fj.setSymbolNameDecimals.call(stringOBm14wn, stringY5VvV4i, uintQYVZ3uT, {from: accounts[0]});
		await Token50X100RPEM9Fj.release.call({from: accounts[4]});
		const uint256MXrWywi = await Token50X100RPEM9Fj.allowance.call(addressLDVUyp2, addressxjnUvXJ, {from: accounts[3]});
	});

	it('test for Token50X100', async () => {
		const Token50X100GJSsyMc = await Token50X100.new({from: accounts[2]});
		const addressD31E9oz = accounts[3]
		const addressxDUA3z = accounts[4]
		const uintcTyMXf6 = BigInt("764")
		const addressUcldEM1 = accounts[3]
		const uintMsMTDOd = BigInt("1787")
		const uintfLGe1CZ = BigInt("1662")
		const addresslWgRoSP = accounts[1]
		const uinttfqtYkv = BigInt("27")
		const uintZCYmCn7 = BigInt("586")
		const addressk1w0JiS = accounts[2]
		const uintWWOeKl5 = BigInt("1064")
		const addressQDgPDif = accounts[3]
		const addressVvIep6d = accounts[5]
		const uint256Mpjk8jO = await Token50X100GJSsyMc.allowance.call(addressxDUA3z, addressD31E9oz, {from: accounts[3]});
		const bool8zN7YL = await Token50X100GJSsyMc.decreaseApproval.call(addressUcldEM1, uintcTyMXf6, {from: accounts[4]});
		const boolQ4zdbzb = await Token50X100GJSsyMc.setVesting.call(addresslWgRoSP, uintfLGe1CZ, uintMsMTDOd, {from: accounts[2]});
//		const boolmrNbKmW = await Token50X100GJSsyMc.setVesting.call(addressk1w0JiS, uintZCYmCn7, uinttfqtYkv, {from: accounts[3]});
//		await Token50X100GJSsyMc.lock.call({from: accounts[0]});
//		const boolrG2Y4Ed = await Token50X100GJSsyMc.issueTokens.call(addressVvIep6d, addressQDgPDif, uintWWOeKl5, {from: accounts[2]});

		assert.equal(bool8zN7YL, true)
		assert.equal(boolQ4zdbzb, true)
		assert.equal(uint256Mpjk8jO, BigInt("0"))
		await expect(Token50X100GJSsyMc.setVesting.call(addressk1w0JiS, uintZCYmCn7, uinttfqtYkv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100GJSsyMc = await Token50X100.new({from: accounts[2]});
		const uintRbdQ5F2 = BigInt("1627")
		const uintPKzh9KM = BigInt("587")
		const uintly9pf2u = BigInt("109")
		const stringAM9UWg8 = "fKnL3nlKLDvitadbLcTjqoROVlmGStzfUc8vSHoiA8RF16oZOGrMGcc5KVnwqST3Fk8YqvE1zDirAFiIRs2K7CO"
		const stringOVlU3QX = "Vu7L4OXwOAYsbAvmQvd6TJhUaubCpkX1RruTlyUxpysBZtZI3zkWEUaaNCsCm"
		const addressgYca05w = accounts[3]
		const addressoefegCk = accounts[4]
//		const boolDWcu7ll = await Token50X100GJSsyMc.safeLock.call(uintPKzh9KM, uintRbdQ5F2, {from: "0x0000000000000000000000000000000000000001"});
//		await Token50X100GJSsyMc.setSymbolNameDecimals.call(stringOVlU3QX, stringAM9UWg8, uintly9pf2u, {from: accounts[4]});
//		const uint256Mpjk8jO = await Token50X100GJSsyMc.allowance.call(addressoefegCk, addressgYca05w, {from: accounts[3]});
//		await Token50X100GJSsyMc.lock.call({from: accounts[0]});

		await expect(Token50X100GJSsyMc.safeLock.call(uintPKzh9KM, uintRbdQ5F2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100WofeyKR = await Token50X100.new({from: accounts[2]});
		const boolLGXK1Vg = true
		const addresswttAw6 = accounts[4]
		const uintTVimnIq = BigInt("1668")
		const addressjQuKbK = accounts[4]
		const addressG1okZv3 = accounts[3]
		const uinto9xL2Ka = BigInt("58")
		const uintq47L3eA = BigInt("894")
		const uintjc7JbXu = BigInt("325")
		const addressBySf7I4 = "0x0000000000000000000000000000000000000001"
//		await Token50X100WofeyKR.setWhiteList.call(addresswttAw6, boolLGXK1Vg, {from: accounts[2]});
//		const booldkXE3Iw = await Token50X100WofeyKR.issueTokens.call(addressG1okZv3, addressjQuKbK, uintTVimnIq, {from: accounts[0]});
//		const bool4SoeQG = await Token50X100WofeyKR.safeLock.call(uintq47L3eA, uinto9xL2Ka, {from: accounts[2]});
//		await Token50X100WofeyKR.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolM62kS1J = await Token50X100WofeyKR.increaseApproval.call(addressBySf7I4, uintjc7JbXu, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100WofeyKR.setWhiteList.call(addresswttAw6, boolLGXK1Vg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100GJSsyMc = await Token50X100.new({from: accounts[2]});
		const uintTZ1F19t = BigInt("850")
		const addresseHy0J21 = accounts[3]
		const addressGfmfkoR = accounts[4]
		const uintbMgQx09 = BigInt("764")
		const addressdxpd7iv = accounts[3]
		const uintiZKKFs4 = BigInt("1064")
		const addresskuMfbhN = accounts[3]
		const addressrYLgnB = accounts[5]
//		await Token50X100GJSsyMc.release.call({from: accounts[2]});
//		const boolP91fzTf = await Token50X100GJSsyMc.setMaxLockPeriod.call(uintTZ1F19t, {from: accounts[4]});
//		const uint256Mpjk8jO = await Token50X100GJSsyMc.allowance.call(addressGfmfkoR, addresseHy0J21, {from: accounts[3]});
//		const bool8zN7YL = await Token50X100GJSsyMc.decreaseApproval.call(addressdxpd7iv, uintbMgQx09, {from: accounts[4]});
//		await Token50X100GJSsyMc.lock.call({from: accounts[0]});
//		const boolrG2Y4Ed = await Token50X100GJSsyMc.issueTokens.call(addressrYLgnB, addresskuMfbhN, uintiZKKFs4, {from: accounts[2]});

		await expect(Token50X100GJSsyMc.release.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100GJSsyMc = await Token50X100.new({from: accounts[2]});
		const uintD6EBl54 = BigInt("71")
		const addressV34BwDp = accounts[3]
		const uintbnoXdN = BigInt("523")
		const addresssGlmUIO = accounts[4]
		const addressr4FcXvm = accounts[3]
		const boolDpR1uij = await Token50X100GJSsyMc.approve.call(addressV34BwDp, uintD6EBl54, {from: accounts[3]});
//		const boolmkeIIRz = await Token50X100GJSsyMc.transferFrom.call(addressr4FcXvm, addresssGlmUIO, uintbnoXdN, {from: "0x0000000000000000000000000000000000000001"});
//		await Token50X100GJSsyMc.lock.call({from: accounts[0]});

		assert.equal(boolDpR1uij, true)
		await expect(Token50X100GJSsyMc.transferFrom.call(addressr4FcXvm, addresssGlmUIO, uintbnoXdN, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100GJSsyMc = await Token50X100.new({from: accounts[2]});
		const uintKreZIJl = BigInt("1627")
		const uintuhC7tb8 = BigInt("587")
		const addressIJdZTUl = accounts[4]
		const uintsEz3bVL = BigInt("109")
		const stringAM9UWg8 = "fKnL3nlKLDvitadbLcTjqoROVlmGStzfUc8vSHoiA8RF16oZOGrMGcc5KVnwqST3Fk8YqvE1zDirAFiIRs2K7CO"
		const stringOVlU3QX = "Vu7L4OXwOAYsbAvmQvd6TJhUaubCpkX1RruTlyUxpysBZtZI3zkWEUaaNCsCm"
		const addressOs1Xpc = accounts[4]
		const addressp5n84co = accounts[4]
		const uint256utrwCMT = await Token50X100GJSsyMc.totalSupply.call({from: accounts[0]});
//		const boolDWcu7ll = await Token50X100GJSsyMc.safeLock.call(uintuhC7tb8, uintKreZIJl, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256gaJNcE = await Token50X100GJSsyMc.balanceOf.call(addressIJdZTUl, {from: accounts[0]});
//		await Token50X100GJSsyMc.setSymbolNameDecimals.call(stringOVlU3QX, stringAM9UWg8, uintsEz3bVL, {from: accounts[4]});
//		const uint256Mpjk8jO = await Token50X100GJSsyMc.allowance.call(addressp5n84co, addressOs1Xpc, {from: accounts[3]});
//		await Token50X100GJSsyMc.lock.call({from: accounts[0]});

		assert.equal(uint256utrwCMT, BigInt("4714285714285710"))
		await expect(Token50X100GJSsyMc.safeLock.call(uintuhC7tb8, uintKreZIJl, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100t0AO3xn = await Token50X100.new({from: accounts[4]});
		const uintlSizeM = BigInt("385")
		const uintGhVhdpl = BigInt("990")
		const addressYfjpciW = accounts[2]
		const addresswgcQTLk = accounts[3]
		const addressdM8Rr0r = accounts[5]
		const uintJi7dybc = BigInt("155")
		const stringBzdEQD2 = ""
		const stringVe373oa = "ETsL9nx1tujjL9ZjMSecDoi14YtCMK9eqsu8SIV7yli1TugNG05"
		const uintm9KEOu1 = BigInt("487")
		const addresskWHE7oB = accounts[2]
		const uinthN7MeS = BigInt("940")
		const addresskzqMVTu = accounts[2]
		const addressyStmAyI = accounts[1]
		const uintLRfx30K = BigInt("824")
		const uinttVD6BXN = BigInt("1836")
		const boolITX1BhZ = await Token50X100t0AO3xn.setVesting.call(addressYfjpciW, uintGhVhdpl, uintlSizeM, {from: accounts[4]});
//		await Token50X100t0AO3xn.setLinkingAddresses.call(addressdM8Rr0r, addresswgcQTLk, {from: accounts[4]});
//		const boolDHgPz9X = await Token50X100t0AO3xn.setSymbolNameDecimals.call(stringVe373oa, stringBzdEQD2, uintJi7dybc, {from: accounts[2]});
//		const boolPPqXoI = await Token50X100t0AO3xn.decreaseApproval.call(addresskWHE7oB, uintm9KEOu1, {from: "0x0000000000000000000000000000000000000001"});
//		const boolU85AqL7 = await Token50X100t0AO3xn.transferFrom.call(addressyStmAyI, addresskzqMVTu, uinthN7MeS, {from: accounts[0]});
//		const boolIkXQsE = await Token50X100t0AO3xn.safeLock.call(uinttVD6BXN, uintLRfx30K, {from: accounts[5]});

		assert.equal(boolITX1BhZ, true)
		await expect(Token50X100t0AO3xn.setLinkingAddresses.call(addressdM8Rr0r, addresswgcQTLk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100GJSsyMc = await Token50X100.new({from: accounts[2]});
		const uintKMDZ76Y = BigInt("1627")
		const uintNvYLisR = BigInt("574")
//		await Token50X100GJSsyMc.lock.call({from: accounts[2]});
//		const boolDWcu7ll = await Token50X100GJSsyMc.safeLock.call(uintNvYLisR, uintKMDZ76Y, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100GJSsyMc.lock.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100GJSsyMc = await Token50X100.new({from: accounts[2]});
		const uintVqZUDQN = BigInt("0")
		const addressYsiaKto = accounts[1]
		const uintn0JIoVB = BigInt("414")
		const uint29qQZH = BigInt("1640")
		const addressDYMihu = accounts[4]
		const uintCZjjmZE = BigInt("754")
		const addressuREZMM3 = "0x0000000000000000000000000000000000000001"
		const boolcFdtFH = await Token50X100GJSsyMc.decreaseApproval.call(addressYsiaKto, uintVqZUDQN, {from: "0x0000000000000000000000000000000000000001"});
//		const boolnOpnJEI = await Token50X100GJSsyMc.setVesting.call(addressDYMihu, uint29qQZH, uintn0JIoVB, {from: accounts[3]});
//		const boolUnCJayr = await Token50X100GJSsyMc.transfer.call(addressuREZMM3, uintCZjjmZE, {from: accounts[2]});

		assert.equal(boolcFdtFH, true)
		await expect(Token50X100GJSsyMc.setVesting.call(addressDYMihu, uint29qQZH, uintn0JIoVB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100r0TRXij = await Token50X100.new({from: accounts[1]});
		const addresst6jxlHF = accounts[3]
		const uintr0xQTYo = BigInt("1174")
		const uintqvSE8Hb = BigInt("1934")
		const uintSmg6lZK = BigInt("105")
		const stringerUb8rV = "YBE0kT2O2c3lpszKugW7IgsnqiIr2OWG3cmTVIXYP4JnzuSHunsEkOQonWo6Ch5Sxb6DgjDfuEshy5O7F8nsZJQrRGMrm"
		const stringOz7Lwg0 = "hMMBBPXrruCvQHmBX8MNXhEoVdDxk42EbwvTdCeD5I1zIEoARDyJ3YYKNbIh"
		const uintKBlFsb = BigInt("1747")
		const addresseiHucQt = accounts[3]
		const addressINPqfCQ = await Token50X100r0TRXij.transferOwnership.call(addresst6jxlHF, {from: accounts[1]});
//		const boolRzICHgw = await Token50X100r0TRXij.safeLock.call(uintqvSE8Hb, uintr0xQTYo, {from: accounts[2]});
//		await Token50X100r0TRXij.setSymbolNameDecimals.call(stringOz7Lwg0, stringerUb8rV, uintSmg6lZK, {from: accounts[1]});
//		const boolIh8y8a = await Token50X100r0TRXij.decreaseApproval.call(addresseiHucQt, uintKBlFsb, {from: accounts[1]});

		await expect(Token50X100r0TRXij.safeLock.call(uintqvSE8Hb, uintr0xQTYo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100IzAN7m6 = await Token50X100.new({from: accounts[1]});
		const uintSbIsLIE = BigInt("1454")
		const addressCC8BjnM = "0x0000000000000000000000000000000000000000"
//		const boolPvi08t = await Token50X100IzAN7m6.transfer.call(addressCC8BjnM, uintSbIsLIE, {from: accounts[0]});

		await expect(Token50X100IzAN7m6.transfer.call(addressCC8BjnM, uintSbIsLIE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100IzAN7m6 = await Token50X100.new({from: accounts[1]});
		const uintVQefVdz = BigInt("1454")
		const addressGE10uHV = "0x00000000000000000000000000000000000000-1"
//		const boolPvi08t = await Token50X100IzAN7m6.transfer.call(addressGE10uHV, uintVQefVdz, {from: accounts[0]});

		await expect(Token50X100IzAN7m6.transfer.call(addressGE10uHV, uintVQefVdz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})