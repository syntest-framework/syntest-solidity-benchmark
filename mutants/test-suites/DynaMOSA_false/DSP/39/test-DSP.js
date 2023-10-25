const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const DSPMVLyGIy = await DSP.new({from: accounts[1]});
		const uintXQnmb8T = BigInt("354")
		const uintsy1OzCz = BigInt("823")
		const addressSy0lDM3 = accounts[3]
		const uintfBDX5pS = BigInt("1083")
		const uintkjzABAe = BigInt("584")
		const addressyGlNyh6 = accounts[5]
//		const boolq8pGyoA = await DSPMVLyGIy.transferWithLock.call(addressSy0lDM3, uintsy1OzCz, uintXQnmb8T, {from: accounts[3]});
//		const uint256jbZ7Zhc = await DSPMVLyGIy.totalSupply.call({from: accounts[4]});
//		const boolRIj9me8 = await DSPMVLyGIy.lock.call(addressyGlNyh6, uintkjzABAe, uintfBDX5pS, {from: "0x0000000000000000000000000000000000000001"});
//		await DSPMVLyGIy.onlyNewOwner.call({from: accounts[4]});

		await expect(DSPMVLyGIy.transferWithLock.call(addressSy0lDM3, uintsy1OzCz, uintXQnmb8T, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPTATbgrl = await DSP.new({from: accounts[0]});
		const addressHRqSPIS = "0x0000000000000000000000000000000000000001"
		const addressRoAEM7y = accounts[0]
//		await DSPTATbgrl.f.call({from: accounts[3]});
//		const addressOatJhlg = await DSPTATbgrl.transferOwnership.call(addressHRqSPIS, {from: accounts[1]});
//		await DSPTATbgrl.onlyNewOwner.call({from: accounts[4]});
//		await DSPTATbgrl.renouncePauser.call({from: accounts[5]});
//		const booliIH8BTa = await DSPTATbgrl.isOwner.call(addressRoAEM7y, {from: accounts[3]});

		await expect(DSPTATbgrl.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const stringhcGOxOP = "moQlDg1uuGRRVYxZSylbvt33Kh8LTFg2ywy"
		const stringeAth85b = "nFWK67smty9VAtv5cndzgRKxaoWmMiIsjRhJs83CaRcJ4loHvKB72633gk6mEd7MLt4xCiTK6q7NIOJlN48OjrApj4LLl"
		const uintOxc24G = BigInt("84")
		const DSPjVYd2j3 = await DSP.new(stringhcGOxOP, stringeAth85b, uintOxc24G, {from: accounts[2]});
		const uintjFy6Pwl = BigInt("114")
		const addressd1Gmqeh = "0x0000000000000000000000000000000000000001"
		const addressNJhchut = accounts[4]
		const boolZFwrwF0 = await DSPjVYd2j3.approve.call(addressd1Gmqeh, uintjFy6Pwl, {from: accounts[4]});
		const boolm8v1dUo = await DSPjVYd2j3.freezeAccount.call(addressNJhchut, {from: accounts[0]});
	});

	it('test for DSP', async () => {
		const DSPYjxow6 = await DSP.new({from: accounts[2]});
		const addresszZZfiA = accounts[5]
		const uintu4uxCtV = BigInt("512")
		const addressizx0MTM = accounts[4]
		const addressMBnUMNF = accounts[2]
		const address62IyAx = accounts[0]
		const addressOyak3Mw = accounts[3]
//		await DSPYjxow6.renouncePauser.call({from: accounts[2]});
//		const uint256HRNKro = await DSPYjxow6.balanceOf.call(addresszZZfiA, {from: accounts[4]});
//		const boolFywBhzc = await DSPYjxow6.transfer.call(addressizx0MTM, uintu4uxCtV, {from: accounts[2]});
//		const uint256oewBs8H = await DSPYjxow6.balanceOf.call(addressMBnUMNF, {from: accounts[1]});
//		const uint256qBZ467 = await DSPYjxow6.allowance.call(addressOyak3Mw, address62IyAx, {from: accounts[0]});

		await expect(DSPYjxow6.renouncePauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPRxpKo1 = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintP5EKI5q = BigInt("1980")
		const address3MBYEi = accounts[4]
		const addressGpAi451 = accounts[3]
		const addressmiBr7bP = accounts[1]
		const boolQDrZHsF = await DSPRxpKo1.mint.call(address3MBYEi, uintP5EKI5q, {from: accounts[4]});
		const addressJ4PJtkY = await DSPRxpKo1.removePauser.call(addressGpAi451, {from: "0x0000000000000000000000000000000000000001"});
		await DSPRxpKo1.unpause.call({from: accounts[3]});
		const stringNzeXmPR = await DSPRxpKo1.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const addressqb9Ccs = await DSPRxpKo1.notFrozen.call(addressmiBr7bP, {from: accounts[3]});
	});

	it('test for DSP', async () => {
		const DSPfl4Ctt0 = await DSP.new({from: accounts[0]});
		const uintEMlwUPe = BigInt("397")
		const addressQupQvtm = "0x0000000000000000000000000000000000000001"
		const addressjDYG9dY = accounts[1]
//		const boolnSWssgD = await DSPfl4Ctt0.burnFrombyOwner.call(addressQupQvtm, uintEMlwUPe, {from: accounts[0]});
//		const uint256Ms2wobv = await DSPfl4Ctt0.totalSupply.call({from: accounts[2]});
//		const address1FDd7b = await DSPfl4Ctt0.removePauser.call(addressjDYG9dY, {from: accounts[4]});

		await expect(DSPfl4Ctt0.burnFrombyOwner.call(addressQupQvtm, uintEMlwUPe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPYjxow6 = await DSP.new({from: accounts[2]});
		const addressVnWRBM9 = accounts[5]
		const uintrBO9bHJ = BigInt("512")
		const addresspuovsHc = accounts[4]
		const addressJYsrBMu = accounts[0]
		const addresswtjeG67 = accounts[3]
		const addresshldOxF = accounts[2]
//		await DSPYjxow6.renouncePauser.call({from: accounts[2]});
//		const stringbBTOb3 = await DSPYjxow6.name.call({from: accounts[0]});
//		const uint256HRNKro = await DSPYjxow6.balanceOf.call(addressVnWRBM9, {from: accounts[4]});
//		const boolFywBhzc = await DSPYjxow6.transfer.call(addresspuovsHc, uintrBO9bHJ, {from: accounts[2]});
//		const uint256qBZ467 = await DSPYjxow6.allowance.call(addresswtjeG67, addressJYsrBMu, {from: accounts[0]});
//		const booloQ3NeI4 = await DSPYjxow6.isPauser.call(addresshldOxF, {from: accounts[4]});

		await expect(DSPYjxow6.renouncePauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPYjxow6 = await DSP.new({from: accounts[2]});
		const addresskQ2X5bL = accounts[5]
		const uintrsTCSxC = BigInt("512")
		const addressWOgdkkW = accounts[4]
		const addressRm0dHQG = accounts[3]
		const uintTEHN4DM = BigInt("1950")
		const addresscDtR5HQ = accounts[2]
		const addresshbPPSxo = accounts[0]
		const addresslhpFjr = accounts[3]
//		await DSPYjxow6.renouncePauser.call({from: accounts[2]});
//		const uint256HRNKro = await DSPYjxow6.balanceOf.call(addresskQ2X5bL, {from: accounts[4]});
//		const boolFywBhzc = await DSPYjxow6.transfer.call(addressWOgdkkW, uintrsTCSxC, {from: accounts[2]});
//		const uint256oewBs8H = await DSPYjxow6.balanceOf.call(addressRm0dHQG, {from: accounts[1]});
//		const boolusBzXYR = await DSPYjxow6.decreaseAllowance.call(addresscDtR5HQ, uintTEHN4DM, {from: accounts[3]});
//		const uint256qBZ467 = await DSPYjxow6.allowance.call(addresslhpFjr, addresshbPPSxo, {from: accounts[0]});

		await expect(DSPYjxow6.renouncePauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPPmQE3ge = await DSP.new({from: accounts[0]});
		const addressyLGmWPC = accounts[2]
		const uintqKXiP0s = BigInt("1637")
		const addresswrxwvuY = accounts[3]
		const uintp5hPzDe = BigInt("1867")
		const addressROwHkIp = accounts[4]
		const addressY7HunP = accounts[2]
		const uint256B1kD0I8 = await DSPPmQE3ge.balanceOf.call(addressyLGmWPC, {from: accounts[1]});
		const boolaFDATdu = await DSPPmQE3ge.increaseAllowance.call(addresswrxwvuY, uintqKXiP0s, {from: "0x0000000000000000000000000000000000000001"});
//		const boolFfjICOS = await DSPPmQE3ge.unlock.call(addressROwHkIp, uintp5hPzDe, {from: accounts[1]});
//		const boolha8mX4w = await DSPPmQE3ge.isPauser.call(addressY7HunP, {from: accounts[2]});

		assert.equal(boolaFDATdu, true)
		assert.equal(uint256B1kD0I8, BigInt("0"))
		await expect(DSPPmQE3ge.unlock.call(addressROwHkIp, uintp5hPzDe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPPmQE3ge = await DSP.new({from: accounts[0]});
		const addressbx7SZC2 = accounts[2]
		const uintyWFRLv8 = BigInt("1637")
		const addressfTL3h5k = accounts[3]
		const uintRTqGTXx = BigInt("1884")
		const addressbbd8mmq = accounts[4]
		const addressjYdO0tl = accounts[2]
		const uint256B1kD0I8 = await DSPPmQE3ge.balanceOf.call(addressbx7SZC2, {from: accounts[1]});
//		await DSPPmQE3ge.onlyPauser.call({from: accounts[3]});
//		const boolaFDATdu = await DSPPmQE3ge.increaseAllowance.call(addressfTL3h5k, uintyWFRLv8, {from: "0x0000000000000000000000000000000000000001"});
//		const boolFfjICOS = await DSPPmQE3ge.unlock.call(addressbbd8mmq, uintRTqGTXx, {from: accounts[1]});
//		const boolha8mX4w = await DSPPmQE3ge.isPauser.call(addressjYdO0tl, {from: accounts[2]});

		assert.equal(uint256B1kD0I8, BigInt("0"))
		await expect(DSPPmQE3ge.onlyPauser.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPPmQE3ge = await DSP.new({from: accounts[0]});
		const uintIvKav82 = BigInt("1779")
		const addressjDioCCt = accounts[4]
		const addressemhn7wr = accounts[2]
		const uinteeXuORe = BigInt("1637")
		const addressvKGFZsq = accounts[3]
		const uintTnJLJP = BigInt("1895")
		const addressLKhMnhA = accounts[5]
		const addressndn8RMK = accounts[0]
		const addressBi6pv8T = accounts[2]
		const boolCRlohuN = await DSPPmQE3ge.approve.call(addressjDioCCt, uintIvKav82, {from: accounts[4]});
		const uint256B1kD0I8 = await DSPPmQE3ge.balanceOf.call(addressemhn7wr, {from: accounts[1]});
		const boolaFDATdu = await DSPPmQE3ge.increaseAllowance.call(addressvKGFZsq, uinteeXuORe, {from: "0x0000000000000000000000000000000000000001"});
//		const boolFfjICOS = await DSPPmQE3ge.unlock.call(addressLKhMnhA, uintTnJLJP, {from: accounts[1]});
//		await DSPPmQE3ge.renouncePauser.call({from: accounts[5]});
//		const addressmLTqEvF = await DSPPmQE3ge.transferOwnership.call(addressndn8RMK, {from: accounts[2]});
//		const boolha8mX4w = await DSPPmQE3ge.isPauser.call(addressBi6pv8T, {from: accounts[2]});

		assert.equal(boolCRlohuN, true)
		assert.equal(boolaFDATdu, true)
		assert.equal(uint256B1kD0I8, BigInt("0"))
		await expect(DSPPmQE3ge.unlock.call(addressLKhMnhA, uintTnJLJP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPPmQE3ge = await DSP.new({from: accounts[0]});
		const addressldswXeE = accounts[2]
		const uintXj9lKvy = BigInt("1867")
		const addressnNE8OPm = accounts[5]
		const addressGEoaPN1 = accounts[2]
		const uint256B1kD0I8 = await DSPPmQE3ge.balanceOf.call(addressldswXeE, {from: accounts[1]});
		const uint8mXW6zK9 = await DSPPmQE3ge.decimals.call({from: accounts[0]});
//		const boolFfjICOS = await DSPPmQE3ge.unlock.call(addressnNE8OPm, uintXj9lKvy, {from: accounts[1]});
//		const boolha8mX4w = await DSPPmQE3ge.isPauser.call(addressGEoaPN1, {from: accounts[2]});

		assert.equal(uint256B1kD0I8, BigInt("0"))
		assert.equal(uint8mXW6zK9, BigInt("18"))
		await expect(DSPPmQE3ge.unlock.call(addressnNE8OPm, uintXj9lKvy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPYjxow6 = await DSP.new({from: accounts[2]});
		const addressDGzIc9m = accounts[5]
		const uintEMhxmTT = BigInt("1659")
		const addresssfRqMgZ = accounts[3]
		const addresss889OW = accounts[5]
		const addressCIK4Mvs = accounts[1]
		const uintpwMbZ4t = BigInt("512")
		const addressFjULjD = accounts[4]
		const uintSFn8Xw = BigInt("487")
		const addressWpDnjdy = accounts[3]
		const address9XRhkE = accounts[2]
		const addressaXrDwbv = accounts[0]
		const addressyXB56OW = accounts[3]
//		await DSPYjxow6.renouncePauser.call({from: accounts[2]});
//		const uint256HRNKro = await DSPYjxow6.balanceOf.call(addressDGzIc9m, {from: accounts[4]});
//		const booloKBJ8kK = await DSPYjxow6.transferFrom.call(addresss889OW, addresssfRqMgZ, uintEMhxmTT, {from: accounts[3]});
//		const boolXHYPVIy = await DSPYjxow6.freezeAccount.call(addressCIK4Mvs, {from: accounts[4]});
//		const boolFywBhzc = await DSPYjxow6.transfer.call(addressFjULjD, uintpwMbZ4t, {from: accounts[2]});
//		const boolc9LNE3 = await DSPYjxow6.transfer.call(addressWpDnjdy, uintSFn8Xw, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256oewBs8H = await DSPYjxow6.balanceOf.call(address9XRhkE, {from: accounts[1]});
//		const uint256qBZ467 = await DSPYjxow6.allowance.call(addressyXB56OW, addressaXrDwbv, {from: accounts[0]});

		await expect(DSPYjxow6.renouncePauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPYVcjAfw = await DSP.new({from: accounts[4]});
		const uintb2S5DSp = BigInt("992")
		const addressyPvAsOT = accounts[2]
		const uintjrORQjs = BigInt("44")
		const addressjcoR66 = accounts[0]
		const addresspHoPjfz = accounts[1]
		const uintA745quf = BigInt("53")
		const addressrzIiNWC = accounts[0]
		const addressfHHqJQy = accounts[4]
		const address6eWFJy = accounts[4]
		const uint256oT81BR2 = await DSPYVcjAfw.totalSupply.call({from: accounts[0]});
		const boolajWw8QF = await DSPYVcjAfw.approve.call(addressyPvAsOT, uintb2S5DSp, {from: "0x0000000000000000000000000000000000000001"});
//		const bool5VYYBZ = await DSPYVcjAfw.transferFrom.call(addresspHoPjfz, addressjcoR66, uintjrORQjs, {from: accounts[3]});
//		const boolApi4iP6 = await DSPYVcjAfw.decreaseAllowance.call(addressrzIiNWC, uintA745quf, {from: accounts[1]});
//		const uint256Ultsx1O = await DSPYVcjAfw.allowance.call(address6eWFJy, addressfHHqJQy, {from: accounts[3]});

		assert.equal(boolajWw8QF, true)
		assert.equal(uint256oT81BR2, BigInt("100000000000000000000000000000"))
		await expect(DSPYVcjAfw.transferFrom.call(addresspHoPjfz, addressjcoR66, uintjrORQjs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPYjxow6 = await DSP.new({from: accounts[2]});
		const addressZZE8J3G = accounts[2]
		const addressQdIfmo7 = accounts[6]
		const addressKnv0pX = accounts[0]
		const addressIVDqBAZ = accounts[3]
//		await DSPYjxow6.renouncePauser.call({from: accounts[2]});
//		const uint256kqDE0Ru = await DSPYjxow6.balanceOf.call(addressZZE8J3G, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256HRNKro = await DSPYjxow6.balanceOf.call(addressQdIfmo7, {from: accounts[4]});
//		const uint256qBZ467 = await DSPYjxow6.allowance.call(addressIVDqBAZ, addressKnv0pX, {from: accounts[0]});
//		const stringncGOpgF = await DSPYjxow6.symbol.call({from: accounts[0]});

		await expect(DSPYjxow6.renouncePauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPYjxow6 = await DSP.new({from: accounts[2]});
		const addressfcpXIf = accounts[5]
		const uintL4fBRO = BigInt("487")
		const addressMRH3KWl = accounts[3]
		const addresshizOtV4 = accounts[1]
		const addressTDIC6Xk = accounts[3]
//		await DSPYjxow6.renouncePauser.call({from: accounts[2]});
//		const uint256HRNKro = await DSPYjxow6.balanceOf.call(addressfcpXIf, {from: accounts[4]});
//		const booloRz3FXY = await DSPYjxow6.paused.call({from: accounts[2]});
//		const boolc9LNE3 = await DSPYjxow6.transfer.call(addressMRH3KWl, uintL4fBRO, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256qBZ467 = await DSPYjxow6.allowance.call(addressTDIC6Xk, addresshizOtV4, {from: accounts[0]});

		await expect(DSPYjxow6.renouncePauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuTJv6d4 = await DSP.new({from: accounts[0]});
		const uintVqEUWE = BigInt("526")
		const uintJf6lFQ = BigInt("1710")
		const addressnPg4fvB = accounts[1]
		const addressgIdWC2t = accounts[5]
		const uintcKU3evs = BigInt("1134")
		const addressfLzk0pp = accounts[0]
		const addresswp9fytI = accounts[3]
		const addressFZIIk8e = accounts[1]
		const uintMr6s4DD = BigInt("1214")
		const addressTpkihA8 = accounts[4]
		const boolkk6yCG9 = await DSPuTJv6d4.transferWithLock.call(addressnPg4fvB, uintJf6lFQ, uintVqEUWE, {from: accounts[0]});
		const uint256NB8p7Vd = await DSPuTJv6d4.balanceOf.call(addressgIdWC2t, {from: accounts[2]});
//		const booluwnEXYk = await DSPuTJv6d4.transferFrom.call(addresswp9fytI, addressfLzk0pp, uintcKU3evs, {from: "0x0000000000000000000000000000000000000001"});
//		const boolUC3qTAd = await DSPuTJv6d4.isOwner.call(addressFZIIk8e, {from: accounts[4]});
//		const stringVlgmhR = await DSPuTJv6d4.symbol.call({from: accounts[2]});
//		const boolrXXzeG = await DSPuTJv6d4.transfer.call(addressTpkihA8, uintMr6s4DD, {from: accounts[2]});

		assert.equal(boolkk6yCG9, true)
		assert.equal(uint256NB8p7Vd, BigInt("0"))
		await expect(DSPuTJv6d4.transferFrom.call(addresswp9fytI, addressfLzk0pp, uintcKU3evs, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuTJv6d4 = await DSP.new({from: accounts[0]});
		const addressypzVaLx = accounts[5]
		const addressCybf7P5 = accounts[0]
		const addressLxIX8as = accounts[1]
		const uintQlDPCK2 = BigInt("1985")
		const addresscD1fAR7 = "0x0000000000000000000000000000000000000002"
		const uintXNjqyi = BigInt("1214")
		const addressoiBFCzG = accounts[4]
		const uint256NB8p7Vd = await DSPuTJv6d4.balanceOf.call(addressypzVaLx, {from: accounts[2]});
		const boolnMsffFu = await DSPuTJv6d4.isOwner.call(addressCybf7P5, {from: accounts[4]});
		const boolUC3qTAd = await DSPuTJv6d4.isOwner.call(addressLxIX8as, {from: accounts[4]});
//		const booljdi0mc1 = await DSPuTJv6d4.transfer.call(addresscD1fAR7, uintQlDPCK2, {from: accounts[4]});
//		const stringVlgmhR = await DSPuTJv6d4.symbol.call({from: accounts[2]});
//		const boolrXXzeG = await DSPuTJv6d4.transfer.call(addressoiBFCzG, uintXNjqyi, {from: accounts[2]});

		assert.equal(boolUC3qTAd, false)
		assert.equal(boolnMsffFu, true)
		assert.equal(uint256NB8p7Vd, BigInt("0"))
		await expect(DSPuTJv6d4.transfer.call(addresscD1fAR7, uintQlDPCK2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPPmQE3ge = await DSP.new({from: accounts[0]});
		const addressRYj1WRH = accounts[3]
		const addressJ5g1Jxl = accounts[4]
//		await DSPPmQE3ge.pause.call({from: accounts[0]});
//		const uint256B1kD0I8 = await DSPPmQE3ge.balanceOf.call(addressRYj1WRH, {from: accounts[1]});
//		const addressMKgmF0O = await DSPPmQE3ge.addPauser.call(addressJ5g1Jxl, {from: accounts[5]});

		await expect(DSPPmQE3ge.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPPmQE3ge = await DSP.new({from: accounts[0]});
		const addresswdMeCl = "0x0000000000000000000000000000000000000001"
		const addressRCTWqBN = accounts[4]
		const addressCy1Ki8G = accounts[4]
		const addressd9I5frB = accounts[3]
		const boolmfPqNME = await DSPPmQE3ge.isOwner.call(addresswdMeCl, {from: accounts[2]});
		const boolKNj1EDA = await DSPPmQE3ge.freezeAccount.call(addressRCTWqBN, {from: accounts[0]});
		const uint256C6WI4yz = await DSPPmQE3ge.balanceOf.call(addressCy1Ki8G, {from: accounts[3]});
		const uint256B1kD0I8 = await DSPPmQE3ge.balanceOf.call(addressd9I5frB, {from: accounts[1]});

		assert.equal(boolKNj1EDA, true)
		assert.equal(boolmfPqNME, false)
		assert.equal(uint256B1kD0I8, BigInt("0"))
		assert.equal(uint256C6WI4yz, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPMVLyGIy = await DSP.new({from: accounts[1]});
		const addressLt0nwfk = accounts[1]
		const uintEDoAdZb = BigInt("2014")
		const addressn4Hrcpd = accounts[0]
		const addresst2VFGOp = accounts[3]
		const addressPEzQgGS = accounts[1]
		const address1MD974 = accounts[6]
//		const addressHiQUw0 = await DSPMVLyGIy.addPauser.call(addressLt0nwfk, {from: accounts[1]});
//		const booliSuwT1g = await DSPMVLyGIy.transferFrom.call(addresst2VFGOp, addressn4Hrcpd, uintEDoAdZb, {from: accounts[5]});
//		const uint256XQ9Ufhm = await DSPMVLyGIy.balanceOf.call(addressPEzQgGS, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256lXpoUs5 = await DSPMVLyGIy.balanceOf.call(address1MD974, {from: accounts[3]});

		await expect(DSPMVLyGIy.addPauser.call(addressLt0nwfk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuTJv6d4 = await DSP.new({from: accounts[0]});
		const addressKnXX1d4 = accounts[5]
		const uintVmxrG9J = BigInt("1900")
		const addressmB7Lga5 = accounts[5]
		const addresseHnkudH = accounts[1]
		const addressupFfZjK = accounts[5]
		const uintvkD961K = BigInt("1985")
		const addressx2Bt1E4 = "0x0000000000000000000000000000000000000001"
		const uintp7vC5FS = BigInt("1037")
		const addressImebQYU = accounts[1]
		const uintT3ivynj = BigInt("1214")
		const addressIatHLpU = accounts[4]
		const uint256NB8p7Vd = await DSPuTJv6d4.balanceOf.call(addressKnXX1d4, {from: accounts[2]});
		const boolKzTr2BC = await DSPuTJv6d4.mint.call(addressmB7Lga5, uintVmxrG9J, {from: accounts[0]});
		const boolUC3qTAd = await DSPuTJv6d4.isOwner.call(addresseHnkudH, {from: accounts[4]});
		const addressrdx1Sen = await DSPuTJv6d4.transferOwnership.call(addressupFfZjK, {from: accounts[0]});
//		const booljdi0mc1 = await DSPuTJv6d4.transfer.call(addressx2Bt1E4, uintvkD961K, {from: accounts[4]});
//		const stringVlgmhR = await DSPuTJv6d4.symbol.call({from: accounts[2]});
//		const boolx0Rx2N = await DSPuTJv6d4.transfer.call(addressImebQYU, uintp7vC5FS, {from: accounts[1]});
//		const boolrXXzeG = await DSPuTJv6d4.transfer.call(addressIatHLpU, uintT3ivynj, {from: accounts[2]});

		assert.equal(boolKzTr2BC, true)
		assert.equal(boolUC3qTAd, false)
		assert.equal(uint256NB8p7Vd, BigInt("0"))
		await expect(DSPuTJv6d4.transfer.call(addressx2Bt1E4, uintvkD961K, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPPmQE3ge = await DSP.new({from: accounts[0]});
		const addressWXQYWR3 = accounts[3]
		const uintVtAEQ4 = BigInt("244")
		const addressfK4wYzG = accounts[1]
		const uintO2siY8m = BigInt("802")
		const uintFgHXGpK = BigInt("1131")
		const addressBXMFgnn = accounts[0]
		const uint256B1kD0I8 = await DSPPmQE3ge.balanceOf.call(addressWXQYWR3, {from: accounts[1]});
		const boolqxHFMdL = await DSPPmQE3ge.approve.call(addressfK4wYzG, uintVtAEQ4, {from: accounts[2]});
		const boolHLTSXca = await DSPPmQE3ge.lock.call(addressBXMFgnn, uintFgHXGpK, uintO2siY8m, {from: accounts[0]});

		assert.equal(boolHLTSXca, true)
		assert.equal(boolqxHFMdL, true)
		assert.equal(uint256B1kD0I8, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPuTJv6d4 = await DSP.new({from: accounts[0]});
		const addresskOFiVB4 = accounts[0]
		const uintEB2szIO = BigInt("1214")
		const addressL9FEvs = accounts[4]
		const addressSMPv0C = await DSPuTJv6d4.upgradeTo.call(addresskOFiVB4, {from: accounts[0]});
//		const boolrXXzeG = await DSPuTJv6d4.transfer.call(addressL9FEvs, uintEB2szIO, {from: accounts[2]});

		await expect(DSPuTJv6d4.transfer.call(addressL9FEvs, uintEB2szIO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})