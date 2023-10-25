const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinYmnH6sh = await DJCoin.new({from: accounts[3]});
		const addressEIRal5o = accounts[0]
		const addressz6rTdXS = accounts[2]
		const addresshAfIFwW = accounts[2]
		const uinthMMkuN = BigInt("388")
		const addresse2PnPLq = accounts[2]
//		const addressHmJUDv1 = await DJCoinYmnH6sh.validRecipient.call(addressEIRal5o, {from: accounts[2]});
//		const uint256XkRyNfO = await DJCoinYmnH6sh.allowance.call(addresshAfIFwW, addressz6rTdXS, {from: accounts[2]});
//		const boolDf4C9UT = await DJCoinYmnH6sh.approve.call(addresse2PnPLq, uinthMMkuN, {from: accounts[4]});

		await expect(DJCoinYmnH6sh.validRecipient.call(addressEIRal5o, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinEnBCEuh = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressL3fYk1K = accounts[2]
		const addressbuhzfAQ = accounts[4]
		const addressoPt6Ub = accounts[3]
		const uint256K2JO0mN = await DJCoinEnBCEuh.balanceOf.call(addressL3fYk1K, {from: accounts[1]});
		const uint256hQTFiHZ = await DJCoinEnBCEuh.allowance.call(addressoPt6Ub, addressbuhzfAQ, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DJCoin', async () => {
		const DJCoiny8sbAlW = await DJCoin.new({from: accounts[0]});
		const addressPKIQSN8 = accounts[0]
		const addressu7YH7Vc = accounts[2]
		const uintHHr2SZB = BigInt("345")
		const uintt7AeJ3V = BigInt("605")
		const uintvDw3hl = BigInt("1484")
		const addressFupxP6 = accounts[4]
		const addressViXElyz = accounts[0]
		const addressxrKPXNE = accounts[3]
		const uinthWvrYBt = BigInt("1449")
		const uintKqMDHMt = BigInt("883")
		const uint256vbg5N0z = await DJCoiny8sbAlW.balanceOf.call(addressPKIQSN8, {from: accounts[2]});
//		const addressRrFQPoL = await DJCoiny8sbAlW.validRecipient.call(addressu7YH7Vc, {from: accounts[4]});
//		const uint256gcYtCgM = await DJCoiny8sbAlW.burn.call(uintt7AeJ3V, uintHHr2SZB, {from: accounts[3]});
//		const boolrF0AFHT = await DJCoiny8sbAlW.transferFrom.call(addressViXElyz, addressFupxP6, uintvDw3hl, {from: accounts[4]});
//		const uint256lWE76TG = await DJCoiny8sbAlW.balanceOf.call(addressxrKPXNE, {from: accounts[0]});
//		const uint256ViGg5g7 = await DJCoiny8sbAlW.burn.call(uintKqMDHMt, uinthWvrYBt, {from: accounts[3]});

		assert.equal(uint256vbg5N0z, BigInt("2100000000000"))
		await expect(DJCoiny8sbAlW.validRecipient.call(addressu7YH7Vc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoincdu5WNX = await DJCoin.new({from: accounts[1]});
		const addressGO7UJKD = accounts[1]
//		await DJCoincdu5WNX.renounceOwnership.call({from: accounts[0]});
//		const addresscmRI1wK = await DJCoincdu5WNX.transferOwnership.call(addressGO7UJKD, {from: accounts[0]});
//		await DJCoincdu5WNX.renounceOwnership.call({from: accounts[3]});

		await expect(DJCoincdu5WNX.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinSWH5W2 = await DJCoin.new({from: accounts[4]});
		const uintk6hOmtU = BigInt("1138")
		const uint00FJTr = BigInt("607")
		const uintPI5jlu6 = BigInt("304")
		const addressXE87LI = accounts[1]
		const uint256LzCsfb = await DJCoinSWH5W2.totalSupply.call({from: accounts[3]});
//		const uint256Y5Z9ino = await DJCoinSWH5W2.burn.call(uint00FJTr, uintk6hOmtU, {from: accounts[2]});
//		const boolHsQ6F1z = await DJCoinSWH5W2.changetokensPerBlock.call(uintPI5jlu6, {from: "0x0000000000000000000000000000000000000001"});
//		const addressAg2lj6z = await DJCoinSWH5W2.validRecipient.call(addressXE87LI, {from: "0x0000000000000000000000000000000000000001"});
//		await DJCoinSWH5W2.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256LzCsfb, BigInt("2100000000000"))
		await expect(DJCoinSWH5W2.burn.call(uint00FJTr, uintk6hOmtU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinbYtLcNS = await DJCoin.new({from: accounts[1]});
		const addressXqTqQ6k = accounts[3]
		const addresspiWD6l4 = accounts[5]
		const uintoYu1cmd = BigInt("674")
		const uintQ4YoQNs = BigInt("12")
		const uintOSRzZnC = BigInt("1710")
		const addresstjVFswi = "0x0000000000000000000000000000000000000001"
		const uintiHJ6BsH = BigInt("888")
		const addressNwusBMx = accounts[3]
		const uint256yTsH1It = await DJCoinbYtLcNS.allowance.call(addresspiWD6l4, addressXqTqQ6k, {from: accounts[0]});
//		const uint256rcT6fC = await DJCoinbYtLcNS.burn.call(uintQ4YoQNs, uintoYu1cmd, {from: accounts[3]});
//		const booleFdD6iV = await DJCoinbYtLcNS.decreaseAllowance.call(addresstjVFswi, uintOSRzZnC, {from: accounts[4]});
//		const booldolATGd = await DJCoinbYtLcNS.decreaseAllowance.call(addressNwusBMx, uintiHJ6BsH, {from: accounts[2]});

		assert.equal(uint256yTsH1It, BigInt("0"))
		await expect(DJCoinbYtLcNS.burn.call(uintQ4YoQNs, uintoYu1cmd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinYmnH6sh = await DJCoin.new({from: accounts[3]});
		const uintJrXamD = BigInt("1853")
		const addressSSYmFCt = accounts[1]
		const addressOQAcsUO = accounts[0]
		const addresstciA6h1 = accounts[0]
		const uintLxICcF = BigInt("1989")
		const addressixPcKPa = accounts[2]
		const addressp8x79U5 = accounts[2]
		const addresschOYUb = accounts[2]
		const uintMe3JFR = BigInt("388")
		const addressal9ZQsY = accounts[2]
		const boolGPlUsKI = await DJCoinYmnH6sh.increaseAllowance.call(addressSSYmFCt, uintJrXamD, {from: accounts[3]});
//		const addressViKw7n3 = await DJCoinYmnH6sh.transferOwnership.call(addressOQAcsUO, {from: accounts[4]});
//		const addressHmJUDv1 = await DJCoinYmnH6sh.validRecipient.call(addresstciA6h1, {from: accounts[2]});
//		await DJCoinYmnH6sh.renounceOwnership.call({from: accounts[4]});
//		const booln7MBSpQ = await DJCoinYmnH6sh.increaseAllowance.call(addressixPcKPa, uintLxICcF, {from: accounts[0]});
//		const uint256XkRyNfO = await DJCoinYmnH6sh.allowance.call(addresschOYUb, addressp8x79U5, {from: accounts[2]});
//		const boolDf4C9UT = await DJCoinYmnH6sh.approve.call(addressal9ZQsY, uintMe3JFR, {from: accounts[4]});

		assert.equal(boolGPlUsKI, true)
		await expect(DJCoinYmnH6sh.transferOwnership.call(addressOQAcsUO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoiny8sbAlW = await DJCoin.new({from: accounts[0]});
		const addressQl1PtE = accounts[0]
		const uintycHsClr = BigInt("990")
		const addresspoYMHhf = accounts[4]
		const addressmWRsXPr = accounts[2]
		const uintbYOsN8 = BigInt("345")
		const uintHE1YtZ3 = BigInt("605")
		const uintilmSymo = BigInt("1484")
		const addressLaGiQHd = accounts[4]
		const addressPxsxDvv = accounts[0]
		const addressmF6ZJ7 = accounts[3]
		const uintJ2aij88 = BigInt("1457")
		const uintDtnmjBI = BigInt("883")
		const uint256vbg5N0z = await DJCoiny8sbAlW.balanceOf.call(addressQl1PtE, {from: accounts[2]});
		const boolfs3Bhq = await DJCoiny8sbAlW.approve.call(addresspoYMHhf, uintycHsClr, {from: accounts[2]});
//		const addressRrFQPoL = await DJCoiny8sbAlW.validRecipient.call(addressmWRsXPr, {from: accounts[4]});
//		const uint256gcYtCgM = await DJCoiny8sbAlW.burn.call(uintHE1YtZ3, uintbYOsN8, {from: accounts[3]});
//		const boolrF0AFHT = await DJCoiny8sbAlW.transferFrom.call(addressPxsxDvv, addressLaGiQHd, uintilmSymo, {from: accounts[4]});
//		const uint256lWE76TG = await DJCoiny8sbAlW.balanceOf.call(addressmF6ZJ7, {from: accounts[0]});
//		const uint256ViGg5g7 = await DJCoiny8sbAlW.burn.call(uintDtnmjBI, uintJ2aij88, {from: accounts[3]});

		assert.equal(boolfs3Bhq, true)
		assert.equal(uint256vbg5N0z, BigInt("2100000000000"))
		await expect(DJCoiny8sbAlW.validRecipient.call(addressmWRsXPr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinOClkwo = await DJCoin.new({from: accounts[4]});
		const uintvCVJzai = BigInt("738")
		const addressrrKKPn9 = accounts[5]
		const addresssBHDZ0D = await DJCoinOClkwo.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressXbmyWTD = await DJCoinOClkwo.owner.call({from: accounts[5]});
		const boolNgmUyXG = await DJCoinOClkwo.approve.call(addressrrKKPn9, uintvCVJzai, {from: accounts[3]});

		assert.equal(addressXbmyWTD, 0xf39f2AacA6391f37fa2270F22e3bfA549B21aEc6)
		assert.equal(addresssBHDZ0D, 0xf39f2AacA6391f37fa2270F22e3bfA549B21aEc6)
		assert.equal(boolNgmUyXG, true)
	});

	it('test for DJCoin', async () => {
		const DJCoinSWH5W2 = await DJCoin.new({from: accounts[4]});
		const uintqo10Bg = BigInt("304")
		const addressQS4bzxc = accounts[2]
		const uint256LzCsfb = await DJCoinSWH5W2.totalSupply.call({from: accounts[3]});
		const boolHsQ6F1z = await DJCoinSWH5W2.changetokensPerBlock.call(uintqo10Bg, {from: "0x0000000000000000000000000000000000000001"});
//		const addressAg2lj6z = await DJCoinSWH5W2.validRecipient.call(addressQS4bzxc, {from: "0x0000000000000000000000000000000000000001"});
//		await DJCoinSWH5W2.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		await DJCoinSWH5W2.onlyOwner.call({from: accounts[3]});
//		await DJCoinSWH5W2.renounceOwnership.call({from: accounts[3]});

		assert.equal(boolHsQ6F1z, true)
		assert.equal(uint256LzCsfb, BigInt("2100000000000"))
		await expect(DJCoinSWH5W2.validRecipient.call(addressQS4bzxc, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinWUiRtKG = await DJCoin.new({from: accounts[1]});
		const uintzTpMp6M = BigInt("1767")
		const addressBNk7EVC = "0x0000000000000000000000000000000000000001"
		const addressw24r3pL = "0x0000000000000000000000000000000000000001"
//		const boolFGG9hM = await DJCoinWUiRtKG.transferFrom.call(addressw24r3pL, addressBNk7EVC, uintzTpMp6M, {from: accounts[5]});
//		const uint256kQYykhk = await DJCoinWUiRtKG.totalSupply.call({from: accounts[4]});

		await expect(DJCoinWUiRtKG.transferFrom.call(addressw24r3pL, addressBNk7EVC, uintzTpMp6M, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinWUiRtKG = await DJCoin.new({from: accounts[1]});
		const uint256kQYykhk = await DJCoinWUiRtKG.totalSupply.call({from: accounts[4]});
		const uint256dMs1uxi = await DJCoinWUiRtKG.totalSupply.call({from: accounts[4]});
		const addressbOMYfC = await DJCoinWUiRtKG.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		await DJCoinWUiRtKG.renounceOwnership.call({from: accounts[1]});

		assert.equal(addressbOMYfC, 0xf97611D1b033Ee835114d04A14415FF01ec6Df47)
		assert.equal(uint256dMs1uxi, BigInt("2100000000000"))
		assert.equal(uint256kQYykhk, BigInt("2100000000000"))
		await expect(DJCoinWUiRtKG.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinXcrBhn = await DJCoin.new({from: accounts[2]});
		const addresslisgVy8 = "0x0000000000000000000000000000000000000001"
		const addressQjGIBvh = accounts[0]
		const uintUn8iHm3 = BigInt("230")
		const addressA7wFlAh = accounts[4]
		const uint256xXIN0S0 = await DJCoinXcrBhn.allowance.call(addressQjGIBvh, addresslisgVy8, {from: accounts[3]});
//		const booly4jaBtM = await DJCoinXcrBhn.transfer.call(addressA7wFlAh, uintUn8iHm3, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256yjSFeJC = await DJCoinXcrBhn.totalSupply.call({from: accounts[2]});

		assert.equal(uint256xXIN0S0, BigInt("0"))
		await expect(DJCoinXcrBhn.transfer.call(addressA7wFlAh, uintUn8iHm3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinYmnH6sh = await DJCoin.new({from: accounts[3]});
		const addressdCqgixB = accounts[2]
		const address6Ue268 = accounts[2]
		const uintHRkO4YQ = BigInt("1201")
		const addressgWQwBsb = "0x0000000000000000000000000000000000000001"
		const uintuNmp3Iv = BigInt("388")
		const addressPGjIuNN = accounts[2]
		const uint256XkRyNfO = await DJCoinYmnH6sh.allowance.call(address6Ue268, addressdCqgixB, {from: accounts[2]});
		const boollhiQZzS = await DJCoinYmnH6sh.decreaseAllowance.call(addressgWQwBsb, uintHRkO4YQ, {from: accounts[0]});
		const boolDf4C9UT = await DJCoinYmnH6sh.approve.call(addressPGjIuNN, uintuNmp3Iv, {from: accounts[4]});

		assert.equal(boolDf4C9UT, true)
		assert.equal(boollhiQZzS, true)
		assert.equal(uint256XkRyNfO, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoinXcrBhn = await DJCoin.new({from: accounts[2]});
		const addressJkzPZO2 = accounts[1]
		const uintGRiQjf = BigInt("230")
		const addressqTkOwWE = accounts[4]
		const addressGFXpMQy = await DJCoinXcrBhn.transferOwnership.call(addressJkzPZO2, {from: accounts[2]});
//		const booly4jaBtM = await DJCoinXcrBhn.transfer.call(addressqTkOwWE, uintGRiQjf, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256yjSFeJC = await DJCoinXcrBhn.totalSupply.call({from: accounts[2]});

		await expect(DJCoinXcrBhn.transfer.call(addressqTkOwWE, uintGRiQjf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinOMzRZFV = await DJCoin.new({from: accounts[0]});
		const uint2xj1pV = BigInt("76")
		const uintqDh3MF3 = BigInt("807")
		const addressFRWarkp = accounts[4]
		const addresskT3kAoX = accounts[1]
		const uintBcHDTb = BigInt("76")
		const addressFA2LPM = accounts[2]
		const uint256olPbhGK = await DJCoinOMzRZFV.burn.call(uintqDh3MF3, uint2xj1pV, {from: accounts[0]});
		const uint256GtdWjq6 = await DJCoinOMzRZFV.totalSupply.call({from: accounts[4]});
		const uint256WxxQKW = await DJCoinOMzRZFV.allowance.call(addresskT3kAoX, addressFRWarkp, {from: "0x0000000000000000000000000000000000000001"});
		const boolnq2ATSw = await DJCoinOMzRZFV.transfer.call(addressFA2LPM, uintBcHDTb, {from: accounts[0]});

		assert.equal(boolnq2ATSw, true)
		assert.equal(uint256GtdWjq6, BigInt("2100000000000"))
		assert.equal(uint256WxxQKW, BigInt("0"))
		assert.equal(uint256olPbhGK, BigInt("2084040000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoinOMzRZFV = await DJCoin.new({from: accounts[0]});
		const addressUGotQI = accounts[3]
		const addressWKOfnzr = accounts[0]
		const uintuQdmuw9 = BigInt("104")
		const addressKFxg3kB = accounts[4]
		const uintEzHmpJY = BigInt("0")
		const addressomOVby = accounts[3]
		const uinth5sTN5R = BigInt("1504")
		const addressoaHDd3b = accounts[2]
		const uintA7WSXm = BigInt("1318")
		const addressiISQX6w = accounts[4]
		const addressyjLoeCA = accounts[0]
		const addressRVQtBfB = accounts[2]
		const uintKd2rv8M = BigInt("1699")
		const addressdVOdzP = accounts[4]
		const uintKcFTTET = BigInt("867")
		const addressId2hh5X = accounts[3]
		const addressYJrkK0g = accounts[3]
		const addresswFYJTM9 = accounts[5]
		const uint256WxxQKW = await DJCoinOMzRZFV.allowance.call(addressWKOfnzr, addressUGotQI, {from: "0x0000000000000000000000000000000000000001"});
		const boolOWpvtNH = await DJCoinOMzRZFV.increaseAllowance.call(addressKFxg3kB, uintuQdmuw9, {from: accounts[2]});
		const boolnq2ATSw = await DJCoinOMzRZFV.transfer.call(addressomOVby, uintEzHmpJY, {from: accounts[0]});
//		const boolEQDZfX = await DJCoinOMzRZFV.transfer.call(addressoaHDd3b, uinth5sTN5R, {from: "0x0000000000000000000000000000000000000001"});
//		const boolAmkrbmP = await DJCoinOMzRZFV.transferFrom.call(addressyjLoeCA, addressiISQX6w, uintA7WSXm, {from: accounts[3]});
//		const addresseJqhQfL = await DJCoinOMzRZFV.transferOwnership.call(addressRVQtBfB, {from: accounts[1]});
//		await DJCoinOMzRZFV.onlyOwner.call({from: accounts[2]});
//		const boolWkmrVwI = await DJCoinOMzRZFV.increaseAllowance.call(addressdVOdzP, uintKd2rv8M, {from: accounts[1]});
//		const boolI070hRJ = await DJCoinOMzRZFV.approve.call(addressId2hh5X, uintKcFTTET, {from: accounts[4]});
//		await DJCoinOMzRZFV.onlyOwner.call({from: accounts[0]});
//		const addressiRmFfCE = await DJCoinOMzRZFV.validRecipient.call(addressYJrkK0g, {from: accounts[2]});
//		const uint256cZedQra = await DJCoinOMzRZFV.balanceOf.call(addresswFYJTM9, {from: accounts[5]});
//		await DJCoinOMzRZFV.onlyOwner.call({from: accounts[2]});

		assert.equal(boolOWpvtNH, true)
		assert.equal(boolnq2ATSw, true)
		assert.equal(uint256WxxQKW, BigInt("0"))
		await expect(DJCoinOMzRZFV.transfer.call(addressoaHDd3b, uinth5sTN5R, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})