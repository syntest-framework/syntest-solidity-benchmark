const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYIM3i04T = await LIBERAPAY.new({from: accounts[2]});
		const uintzhFZMLz = BigInt("1214")
		const uintNkUec5X = BigInt("52")
		const addressGD22M5Z = accounts[4]
		const uintCN47b9d = BigInt("2000")
		const addressQeNctzs = accounts[1]
		const uintdsx5fJB = BigInt("1006")
		const addressGHiKkiW = accounts[3]
		const uintF44HatE = BigInt("464")
		const addressjkHi2oN = "0x0000000000000000000000000000000000000001"
//		const boolYZrhRAf = await LIBERAPAYIM3i04T.lock.call(addressGD22M5Z, uintNkUec5X, uintzhFZMLz, {from: accounts[2]});
//		await LIBERAPAYIM3i04T.onlyNewOwner.call({from: accounts[0]});
//		const boolsz5WsN1 = await LIBERAPAYIM3i04T.approve.call(addressQeNctzs, uintCN47b9d, {from: accounts[4]});
//		const boolRCz1ixN = await LIBERAPAYIM3i04T.unlock.call(addressGHiKkiW, uintdsx5fJB, {from: accounts[4]});
//		const boolpqNjmxd = await LIBERAPAYIM3i04T.decreaseAllowance.call(addressjkHi2oN, uintF44HatE, {from: accounts[3]});
//		await LIBERAPAYIM3i04T.whenPaused.call({from: accounts[4]});

		await expect(LIBERAPAYIM3i04T.lock.call(addressGD22M5Z, uintNkUec5X, uintzhFZMLz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYIZxZ2xg = await LIBERAPAY.new({from: accounts[0]});
		const addressg9C3cWT = accounts[0]
		const addressVfoBpBT = accounts[3]
		const addressObnND3r = accounts[4]
		const uintuMM4VdF = BigInt("1773")
		const addressbjQl3Nn = accounts[1]
		const uint256Y7zGaTu = await LIBERAPAYIZxZ2xg.balanceOf.call(addressg9C3cWT, {from: accounts[0]});
		const uint256wpJlyp = await LIBERAPAYIZxZ2xg.currentBalanceOf.call(addressVfoBpBT, {from: accounts[1]});
//		const boolQiGPGR = await LIBERAPAYIZxZ2xg.unfreezeAccount.call(addressObnND3r, {from: accounts[1]});
//		await LIBERAPAYIZxZ2xg.f.call({from: accounts[1]});
//		const booly3Y5hKb = await LIBERAPAYIZxZ2xg.unlock.call(addressbjQl3Nn, uintuMM4VdF, {from: accounts[5]});

		assert.equal(uint256Y7zGaTu, BigInt("3000000000000000000000000000"))
		assert.equal(uint256wpJlyp, BigInt("0"))
		await expect(LIBERAPAYIZxZ2xg.unfreezeAccount.call(addressObnND3r, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYwIebd0A = await LIBERAPAY.new({from: accounts[3]});
		const uintmSSU75W = BigInt("1955")
		const addressAshKUIt = accounts[1]
		const uintl5dTjf9 = BigInt("1143")
		const uintaMmPjzi = BigInt("938")
		const addresszF8vzrZ = accounts[3]
		const uintFo0uXJk = BigInt("1460")
		const addressHE0LZ3B = accounts[4]
		const uintiYi7At = BigInt("1429")
		const addressgXSluND = accounts[5]
		const boolcr7JEUv = await LIBERAPAYwIebd0A.distribute.call(addressAshKUIt, uintmSSU75W, {from: accounts[3]});
//		const boolST32NyD = await LIBERAPAYwIebd0A.lock.call(addresszF8vzrZ, uintaMmPjzi, uintl5dTjf9, {from: accounts[5]});
//		const boolYiUoQik = await LIBERAPAYwIebd0A.mint.call(addressHE0LZ3B, uintFo0uXJk, {from: "0x0000000000000000000000000000000000000001"});
//		await LIBERAPAYwIebd0A.whenNotPaused.call({from: accounts[0]});
//		await LIBERAPAYwIebd0A.showLockState.call(addressgXSluND, uintiYi7At, {from: accounts[3]});

		assert.equal(boolcr7JEUv, true)
		await expect(LIBERAPAYwIebd0A.lock.call(addresszF8vzrZ, uintaMmPjzi, uintl5dTjf9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYMtwJVbr = await LIBERAPAY.new({from: accounts[3]});
		const uintM70Zq1H = BigInt("235")
		const uintWJuFnlt = BigInt("1882")
		const addressnzcMW2 = accounts[4]
//		await LIBERAPAYMtwJVbr.whenPaused.call({from: accounts[3]});
//		const boolLtNel26 = await LIBERAPAYMtwJVbr.lock.call(addressnzcMW2, uintWJuFnlt, uintM70Zq1H, {from: accounts[1]});

		await expect(LIBERAPAYMtwJVbr.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYWJxDtB8 = await LIBERAPAY.new({from: accounts[4]});
		const addressMRiP5Dl = accounts[1]
		const uint256CkT2jGI = await LIBERAPAYWJxDtB8.balanceOf.call(addressMRiP5Dl, {from: accounts[4]});
		const uint256cEmKMA5 = await LIBERAPAYWJxDtB8.getNowTime.call({from: accounts[4]});
		const uint256xTOol07 = await LIBERAPAYWJxDtB8.totalSupply.call({from: accounts[1]});
//		await LIBERAPAYWJxDtB8.onlyOwner.call({from: accounts[4]});
//		await LIBERAPAYWJxDtB8.whenPaused.call({from: accounts[4]});

		assert.equal(uint256CkT2jGI, BigInt("0"))
		assert.equal(uint256cEmKMA5, BigInt("1630229553"))
		assert.equal(uint256xTOol07, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYWJxDtB8.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYvtlax5G = await LIBERAPAY.new({from: accounts[0]});
		const uintFCDEb2 = BigInt("1279")
		const addresswn0IkXS = accounts[0]
		const uintsgtAtTU = BigInt("1921")
		const addressA2neuQj = accounts[1]
		const boolDonc88b = await LIBERAPAYvtlax5G.increaseAllowance.call(addresswn0IkXS, uintFCDEb2, {from: "0x0000000000000000000000000000000000000001"});
//		const boolyPUMWm = await LIBERAPAYvtlax5G.burnFrom.call(addressA2neuQj, uintsgtAtTU, {from: accounts[3]});

		assert.equal(boolDonc88b, true)
		await expect(LIBERAPAYvtlax5G.burnFrom.call(addressA2neuQj, uintsgtAtTU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYUaQDxbQ = await LIBERAPAY.new({from: accounts[0]});
		const uintnGNrDkg = BigInt("955")
		const addressPRnfTNs = accounts[0]
		const addressrfY62Vs = accounts[3]
		const uintV0YdpZV = BigInt("1500")
		const addresslODtF3B = accounts[4]
//		const boolCt03vUd = await LIBERAPAYUaQDxbQ.transferFrom.call(addressrfY62Vs, addressPRnfTNs, uintnGNrDkg, {from: accounts[0]});
//		const booly6avobO = await LIBERAPAYUaQDxbQ.burnFrom.call(addresslODtF3B, uintV0YdpZV, {from: accounts[1]});

		await expect(LIBERAPAYUaQDxbQ.transferFrom.call(addressrfY62Vs, addressPRnfTNs, uintnGNrDkg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYE2Cs9mr = await LIBERAPAY.new({from: accounts[0]});
		const addressxQBt8S1 = accounts[0]
		const addressiwqjrTk = accounts[0]
		const uintGums5JL = BigInt("663")
		const addressAeeeUD = accounts[5]
		const uint256u8uX3Lo = await LIBERAPAYE2Cs9mr.allowance.call(addressiwqjrTk, addressxQBt8S1, {from: accounts[1]});
//		const boolzNVonI = await LIBERAPAYE2Cs9mr.transfer.call(addressAeeeUD, uintGums5JL, {from: accounts[3]});

		assert.equal(uint256u8uX3Lo, BigInt("0"))
		await expect(LIBERAPAYE2Cs9mr.transfer.call(addressAeeeUD, uintGums5JL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYvocxwtt = await LIBERAPAY.new({from: accounts[2]});
		const uintF5dyvp2 = BigInt("141")
		const addressx9XpdYf = accounts[5]
		const uint931GNS = BigInt("1023")
		const addressPCbT6QI = accounts[2]
//		await LIBERAPAYvocxwtt.f.call({from: accounts[4]});
//		const boolVhBdOJH = await LIBERAPAYvocxwtt.burnFrom.call(addressx9XpdYf, uintF5dyvp2, {from: "0x0000000000000000000000000000000000000001"});
//		const boolfyecpt4 = await LIBERAPAYvocxwtt.increaseAllowance.call(addressPCbT6QI, uint931GNS, {from: accounts[1]});

		await expect(LIBERAPAYvocxwtt.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYIZxZ2xg = await LIBERAPAY.new({from: accounts[0]});
		const uintvsekNtj = BigInt("1220")
		const addressQISRtAX = accounts[4]
		const uintbgjuDs8 = BigInt("321")
		const addresspi5Net = accounts[2]
		const addressVarqH23 = accounts[0]
		const addresswFWEooT = accounts[3]
		const addressFH5wQRJ = accounts[4]
		const addressUJyOf8r = accounts[0]
		const uintBHUm2rt = BigInt("1773")
		const addresseL63Bv5 = accounts[1]
//		const boolmg8XfTF = await LIBERAPAYIZxZ2xg.decreaseAllowance.call(addressQISRtAX, uintvsekNtj, {from: accounts[2]});
//		await LIBERAPAYIZxZ2xg.showLockState.call(addresspi5Net, uintbgjuDs8, {from: accounts[2]});
//		const uint256Y7zGaTu = await LIBERAPAYIZxZ2xg.balanceOf.call(addressVarqH23, {from: accounts[0]});
//		const uint256wpJlyp = await LIBERAPAYIZxZ2xg.currentBalanceOf.call(addresswFWEooT, {from: accounts[1]});
//		const boolQiGPGR = await LIBERAPAYIZxZ2xg.unfreezeAccount.call(addressFH5wQRJ, {from: accounts[1]});
//		await LIBERAPAYIZxZ2xg.f.call({from: accounts[1]});
//		const booln3cTkFt = await LIBERAPAYIZxZ2xg.unfreezeAccount.call(addressUJyOf8r, {from: accounts[2]});
//		const booly3Y5hKb = await LIBERAPAYIZxZ2xg.unlock.call(addresseL63Bv5, uintBHUm2rt, {from: accounts[5]});

		await expect(LIBERAPAYIZxZ2xg.decreaseAllowance.call(addressQISRtAX, uintvsekNtj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYMtwJVbr = await LIBERAPAY.new({from: accounts[3]});
		const uintSNmtXjh = BigInt("212")
		const addressFmnY5bq = accounts[3]
		const uintS9Tkha = BigInt("210")
		const uintEWklYCe = BigInt("1849")
		const addresssGWmgNe = accounts[4]
//		const booljWdledx = await LIBERAPAYMtwJVbr.unlock.call(addressFmnY5bq, uintSNmtXjh, {from: accounts[3]});
//		const boolLtNel26 = await LIBERAPAYMtwJVbr.lock.call(addresssGWmgNe, uintEWklYCe, uintS9Tkha, {from: accounts[1]});
//		await LIBERAPAYMtwJVbr.onlyNewOwner.call({from: accounts[2]});

		await expect(LIBERAPAYMtwJVbr.unlock.call(addressFmnY5bq, uintSNmtXjh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYOyyzhW2 = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintsE2ggSs = BigInt("194")
		const addressuwDo4kr = accounts[0]
		const addressURUcexg = "0x0000000000000000000000000000000000000001"
		const addressJgoFCwZ = accounts[4]
		const boolqIHMI0t = await LIBERAPAYOyyzhW2.distribute.call(addressuwDo4kr, uintsE2ggSs, {from: accounts[5]});
		const uint256g2FQqvh = await LIBERAPAYOyyzhW2.currentBalanceOf.call(addressURUcexg, {from: accounts[0]});
		const addressCWhOzgV = await LIBERAPAYOyyzhW2.notFrozen.call(addressJgoFCwZ, {from: accounts[1]});
		await LIBERAPAYOyyzhW2.pause.call({from: accounts[1]});
		await LIBERAPAYOyyzhW2.whenNotPaused.call({from: accounts[1]});
		await LIBERAPAYOyyzhW2.unpause.call({from: accounts[3]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYE2Cs9mr = await LIBERAPAY.new({from: accounts[0]});
		const uintpusBS9N = BigInt("1243")
		const uintaXhzZHH = BigInt("663")
		const addressL6sSsRq = accounts[7]
		const boolOPDzX7Q = await LIBERAPAYE2Cs9mr.burn.call(uintpusBS9N, {from: accounts[0]});
//		await LIBERAPAYE2Cs9mr.onlyNewOwner.call({from: accounts[4]});
//		const boolzNVonI = await LIBERAPAYE2Cs9mr.transfer.call(addressL6sSsRq, uintaXhzZHH, {from: accounts[3]});

		assert.equal(boolOPDzX7Q, true)
		await expect(LIBERAPAYE2Cs9mr.onlyNewOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYIZxZ2xg = await LIBERAPAY.new({from: accounts[0]});
		const uintGdmK1Nn = BigInt("1907")
		const addressLPvySn = accounts[0]
		const addressZOPZbx2 = accounts[0]
		const addressRNWbgL = accounts[4]
		const addressxCoXlXY = accounts[4]
//		await LIBERAPAYIZxZ2xg.showLockState.call(addressLPvySn, uintGdmK1Nn, {from: accounts[3]});
//		const uint256Y7zGaTu = await LIBERAPAYIZxZ2xg.balanceOf.call(addressZOPZbx2, {from: accounts[0]});
//		await LIBERAPAYIZxZ2xg.onlyNewOwner.call({from: accounts[3]});
//		const uint256wpJlyp = await LIBERAPAYIZxZ2xg.currentBalanceOf.call(addressRNWbgL, {from: accounts[1]});
//		const uint256nrlqxcA = await LIBERAPAYIZxZ2xg.totalSupply.call({from: accounts[5]});
//		const boolQiGPGR = await LIBERAPAYIZxZ2xg.unfreezeAccount.call(addressxCoXlXY, {from: accounts[1]});
//		await LIBERAPAYIZxZ2xg.f.call({from: accounts[1]});

		await expect(LIBERAPAYIZxZ2xg.showLockState.call(addressLPvySn, uintGdmK1Nn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYE2Cs9mr = await LIBERAPAY.new({from: accounts[0]});
		const addressRBf3Wlz = accounts[5]
		const uintIOSdIiJ = BigInt("85")
		const addressN7kIxzs = "0x0000000000000000000000000000000000000001"
		const uintovfVpGl = BigInt("663")
		const addresswlcqz81 = accounts[7]
		const uint256iU23dKe = await LIBERAPAYE2Cs9mr.currentBalanceOf.call(addressRBf3Wlz, {from: accounts[2]});
		const boolbC6LIKA = await LIBERAPAYE2Cs9mr.approve.call(addressN7kIxzs, uintIOSdIiJ, {from: accounts[4]});
		const uint2565n3ZMl = await LIBERAPAYE2Cs9mr.totalSupply.call({from: accounts[2]});
//		const boolzNVonI = await LIBERAPAYE2Cs9mr.transfer.call(addresswlcqz81, uintovfVpGl, {from: accounts[3]});

		assert.equal(boolbC6LIKA, true)
		assert.equal(uint2565n3ZMl, BigInt("3000000000000000000000000000"))
		assert.equal(uint256iU23dKe, BigInt("0"))
		await expect(LIBERAPAYE2Cs9mr.transfer.call(addresswlcqz81, uintovfVpGl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYIZxZ2xg = await LIBERAPAY.new({from: accounts[0]});
		const uintcl2vCAJ = BigInt("1762")
		const addressRKVxmCI = accounts[0]
		const uintT20U9QU = BigInt("1377")
		const addresssocJxBH = accounts[1]
		const addressdUt3HCG = accounts[5]
//		await LIBERAPAYIZxZ2xg.showLockState.call(addressRKVxmCI, uintcl2vCAJ, {from: "0x0000000000000000000000000000000000000001"});
//		const bool2eLfh5 = await LIBERAPAYIZxZ2xg.mint.call(addresssocJxBH, uintT20U9QU, {from: accounts[0]});
//		const uint256wpJlyp = await LIBERAPAYIZxZ2xg.currentBalanceOf.call(addressdUt3HCG, {from: accounts[1]});

		await expect(LIBERAPAYIZxZ2xg.showLockState.call(addressRKVxmCI, uintcl2vCAJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYIZxZ2xg = await LIBERAPAY.new({from: accounts[0]});
		const addressRvXxCmE = accounts[5]
		const uint256wpJlyp = await LIBERAPAYIZxZ2xg.currentBalanceOf.call(addressRvXxCmE, {from: accounts[1]});
//		await LIBERAPAYIZxZ2xg.pause.call({from: accounts[0]});
//		await LIBERAPAYIZxZ2xg.unpause.call({from: accounts[3]});

		assert.equal(uint256wpJlyp, BigInt("0"))
		await expect(LIBERAPAYIZxZ2xg.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYMtwJVbr = await LIBERAPAY.new({from: accounts[3]});
		const addressP4cCVW2 = accounts[0]
		const uintj9wHjNZ = BigInt("210")
		const uintx52nnlt = BigInt("1847")
		const addressvdycN5 = accounts[4]
		const boolqY6fQRa = await LIBERAPAYMtwJVbr.freezeAccount.call(addressP4cCVW2, {from: accounts[3]});
//		await LIBERAPAYMtwJVbr.onlyOwner.call({from: accounts[4]});
//		const boolLtNel26 = await LIBERAPAYMtwJVbr.lock.call(addressvdycN5, uintx52nnlt, uintj9wHjNZ, {from: accounts[1]});

		assert.equal(boolqY6fQRa, true)
		await expect(LIBERAPAYMtwJVbr.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYIZxZ2xg = await LIBERAPAY.new({from: accounts[0]});
		const addressYzujf2v = accounts[3]
		const addressHUrjsti = accounts[1]
		const addressEB9KQda = accounts[0]
		const uintWzK2YX = BigInt("1176")
		const addressLdbS7B7 = accounts[3]
		const addressEbey03s = await LIBERAPAYIZxZ2xg.upgradeTo.call(addressYzujf2v, {from: accounts[0]});
		const uint256Y7zGaTu = await LIBERAPAYIZxZ2xg.balanceOf.call(addressHUrjsti, {from: accounts[0]});
		const uint256E2bOLt = await LIBERAPAYIZxZ2xg.getNowTime.call({from: accounts[4]});
//		const boolqJS2guU = await LIBERAPAYIZxZ2xg.unfreezeAccount.call(addressEB9KQda, {from: accounts[2]});
//		await LIBERAPAYIZxZ2xg.showLockState.call(addressLdbS7B7, uintWzK2YX, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256E2bOLt, BigInt("1630229538"))
		assert.equal(uint256Y7zGaTu, BigInt("0"))
		await expect(LIBERAPAYIZxZ2xg.unfreezeAccount.call(addressEB9KQda, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYUaQDxbQ = await LIBERAPAY.new({from: accounts[0]});
		const addressd7bVt2 = accounts[0]
		const uintbe2AhlX = BigInt("955")
		const addressldFI4l = accounts[1]
		const addressvj5YqEF = accounts[3]
		const uint3ckGq3 = BigInt("1591")
		const uintUNDuDJi = BigInt("532")
		const addresstj5C2rJ = accounts[2]
		const addressqn42NYA = await LIBERAPAYUaQDxbQ.transferOwnership.call(addressd7bVt2, {from: accounts[0]});
//		const boolCt03vUd = await LIBERAPAYUaQDxbQ.transferFrom.call(addressvj5YqEF, addressldFI4l, uintbe2AhlX, {from: accounts[0]});
//		const boolMYgrFc3 = await LIBERAPAYUaQDxbQ.lock.call(addresstj5C2rJ, uintUNDuDJi, uint3ckGq3, {from: accounts[1]});

		await expect(LIBERAPAYUaQDxbQ.transferFrom.call(addressvj5YqEF, addressldFI4l, uintbe2AhlX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})