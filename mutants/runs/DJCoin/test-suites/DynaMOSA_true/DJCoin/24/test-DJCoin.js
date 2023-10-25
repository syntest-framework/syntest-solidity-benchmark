const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinWRrB0EX = await DJCoin.new({from: accounts[3]});
		const uintna9pSSU = BigInt("425")
		const addressHuB7zXZ = accounts[2]
		const uintn9ITjOH = BigInt("1572")
		const addresszEDwqO1 = accounts[4]
		const addresskTIWCwb = "0x0000000000000000000000000000000000000001"
		const booleCAScL = await DJCoinWRrB0EX.approve.call(addressHuB7zXZ, uintna9pSSU, {from: accounts[0]});
		await DJCoinWRrB0EX.onlyOwner.call({from: accounts[4]});
		const boolLjxeMBS = await DJCoinWRrB0EX.transferFrom.call(addresskTIWCwb, addresszEDwqO1, uintn9ITjOH, {from: accounts[2]});

		assert.equal(booleCAScL, true)
		await expect(DJCoinWRrB0EX.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoindLs0vCN = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintPMmiPFi = BigInt("3")
		const addressxGmupmt = accounts[3]
		const uinteLhOfFG = BigInt("199")
		const addresswtwuPyw = accounts[1]
		const addressXnyB7Ed = accounts[4]
		const uintCHOqDzq = BigInt("1752")
		const addressUeQC5ea = accounts[2]
		const addresse2hiONB = accounts[3]
		const boolEc32sGI = await DJCoindLs0vCN.transfer.call(addressxGmupmt, uintPMmiPFi, {from: accounts[0]});
		const boolRU9pn8G = await DJCoindLs0vCN.decreaseAllowance.call(addresswtwuPyw, uinteLhOfFG, {from: accounts[3]});
		const addresstDuZpGc = await DJCoindLs0vCN.validRecipient.call(addressXnyB7Ed, {from: accounts[2]});
		const boolrpSZsSm = await DJCoindLs0vCN.transferFrom.call(addresse2hiONB, addressUeQC5ea, uintCHOqDzq, {from: accounts[3]});
	});

	it('test for DJCoin', async () => {
		const DJCoinxZcNYV3 = await DJCoin.new({from: accounts[4]});
		const uintTygpDvP = BigInt("1247")
		const addressokUYfzB = "0x0000000000000000000000000000000000000001"
		const addressDWTueqp = accounts[4]
		const addressOkyL8or = accounts[4]
		const uintLyClNQA = BigInt("1728")
		const addressQoiHDdX = accounts[3]
		const boolMTa8Maf = await DJCoinxZcNYV3.changetokensPerBlock.call(uintTygpDvP, {from: accounts[4]});
		const uint256Vv7ZfV = await DJCoinxZcNYV3.allowance.call(addressDWTueqp, addressokUYfzB, {from: accounts[1]});
		const uint256PVWfBJO = await DJCoinxZcNYV3.balanceOf.call(addressOkyL8or, {from: accounts[4]});
		const boolnuiJ2g1 = await DJCoinxZcNYV3.transfer.call(addressQoiHDdX, uintLyClNQA, {from: accounts[4]});

		assert.equal(boolMTa8Maf, true)
		assert.equal(boolnuiJ2g1, true)
		assert.equal(uint256PVWfBJO, BigInt("2100000000000"))
		assert.equal(uint256Vv7ZfV, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoinsv64WUK = await DJCoin.new({from: accounts[3]});
		const addressT2mAC1m = accounts[3]
		const uintybhAJIr = BigInt("1779")
		const addressUqKvtw6 = accounts[1]
		const addressTbqRvhH = accounts[4]
		await DJCoinsv64WUK.renounceOwnership.call({from: accounts[2]});
		const uint256C8Oz4H = await DJCoinsv64WUK.balanceOf.call(addressT2mAC1m, {from: accounts[2]});
		await DJCoinsv64WUK.renounceOwnership.call({from: accounts[4]});
		const boolnclOK8U = await DJCoinsv64WUK.transferFrom.call(addressTbqRvhH, addressUqKvtw6, uintybhAJIr, {from: accounts[0]});

		await expect(DJCoinsv64WUK.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinbF07gZ = await DJCoin.new({from: accounts[4]});
		const uintIf5WKxo = BigInt("923")
		const addressbcbZEe = accounts[1]
		const addresspRxzfXt = accounts[0]
		const uintTHhft8N = BigInt("396")
		const addressEQAI0V9 = accounts[4]
		const boolFOJeS2I = await DJCoinbF07gZ.transferFrom.call(addresspRxzfXt, addressbcbZEe, uintIf5WKxo, {from: accounts[3]});
		await DJCoinbF07gZ.onlyOwner.call({from: accounts[3]});
		const bool8EjRI2 = await DJCoinbF07gZ.approve.call(addressEQAI0V9, uintTHhft8N, {from: accounts[0]});

		await expect(DJCoinbF07gZ.transferFrom.call(addresspRxzfXt, addressbcbZEe, uintIf5WKxo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinbyo6cnv = await DJCoin.new({from: accounts[4]});
		const uintiL751qg = BigInt("711")
		const addressuDGM0xN = accounts[0]
		const uintENzJCk = BigInt("918")
		const addressPbalmll = accounts[3]
		const boolC0bXp4l = await DJCoinbyo6cnv.increaseAllowance.call(addressuDGM0xN, uintiL751qg, {from: accounts[4]});
		await DJCoinbyo6cnv.onlyOwner.call({from: accounts[2]});
		const boolz41W8Yh = await DJCoinbyo6cnv.transfer.call(addressPbalmll, uintENzJCk, {from: accounts[5]});

		assert.equal(boolC0bXp4l, true)
		await expect(DJCoinbyo6cnv.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinhVRAEPt = await DJCoin.new({from: accounts[0]});
		const addressKRoihjR = "0x0000000000000000000000000000000000000001"
		const addressEIK2JGP = accounts[0]
		const addressQ1DKhlV = accounts[2]
		const addresse8RoLQr = accounts[4]
		const uint256UqtE9Pi = await DJCoinhVRAEPt.allowance.call(addressEIK2JGP, addressKRoihjR, {from: accounts[2]});
		await DJCoinhVRAEPt.renounceOwnership.call({from: accounts[0]});
		const uint256bMVTbwO = await DJCoinhVRAEPt.allowance.call(addresse8RoLQr, addressQ1DKhlV, {from: accounts[3]});

		assert.equal(uint256UqtE9Pi, BigInt("0"))
		await expect(DJCoinhVRAEPt.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinxZcNYV3 = await DJCoin.new({from: accounts[4]});
		const addressPk700ZC = "0x0000000000000000000000000000000000000002"
		const addressMKtQmvf = accounts[4]
		const addressziXq6HQ = accounts[4]
		const uintxNes1dZ = BigInt("1728")
		const addressEKzsgv = accounts[3]
		const uint256Vv7ZfV = await DJCoinxZcNYV3.allowance.call(addressMKtQmvf, addressPk700ZC, {from: accounts[1]});
		const uint256dQwepSj = await DJCoinxZcNYV3.totalSupply.call({from: accounts[1]});
		const uint256PVWfBJO = await DJCoinxZcNYV3.balanceOf.call(addressziXq6HQ, {from: accounts[4]});
		const boolnuiJ2g1 = await DJCoinxZcNYV3.transfer.call(addressEKzsgv, uintxNes1dZ, {from: accounts[4]});

		assert.equal(boolnuiJ2g1, true)
		assert.equal(uint256PVWfBJO, BigInt("2100000000000"))
		assert.equal(uint256Vv7ZfV, BigInt("0"))
		assert.equal(uint256dQwepSj, BigInt("2100000000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoinxZcNYV3 = await DJCoin.new({from: accounts[4]});
		const addressZohDgwj = "0x0000000000000000000000000000000000000002"
		const addressSxGpz5Y = accounts[4]
		const addressGkDIxff = accounts[5]
		const uintPJ3klbb = BigInt("1865")
		const addressNsYZP9 = accounts[3]
		const uintNH4HWI = BigInt("1728")
		const addressZNNYX2x = accounts[3]
		const uint256Vv7ZfV = await DJCoinxZcNYV3.allowance.call(addressSxGpz5Y, addressZohDgwj, {from: accounts[1]});
		const uint256dQwepSj = await DJCoinxZcNYV3.totalSupply.call({from: accounts[1]});
		const uint256PVWfBJO = await DJCoinxZcNYV3.balanceOf.call(addressGkDIxff, {from: accounts[4]});
		const boolwOivf7V = await DJCoinxZcNYV3.decreaseAllowance.call(addressNsYZP9, uintPJ3klbb, {from: accounts[5]});
		const boolnuiJ2g1 = await DJCoinxZcNYV3.transfer.call(addressZNNYX2x, uintNH4HWI, {from: accounts[4]});

		assert.equal(boolnuiJ2g1, true)
		assert.equal(boolwOivf7V, true)
		assert.equal(uint256PVWfBJO, BigInt("0"))
		assert.equal(uint256Vv7ZfV, BigInt("0"))
		assert.equal(uint256dQwepSj, BigInt("2100000000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoinnGRwfFT = await DJCoin.new({from: accounts[1]});
		const uintoOLmFi = BigInt("1506")
		const addressMmVmYQj = accounts[1]
		const uintLPibHaN = BigInt("1829")
		const uintePdkMVk = BigInt("842")
		const addressY9atvtg = accounts[3]
		const uintd1bKXnM = BigInt("110")
		const addresszKpMph7 = accounts[2]
		const addresskCjpMM3 = accounts[5]
		const booliQGyQLR = await DJCoinnGRwfFT.approve.call(addressMmVmYQj, uintoOLmFi, {from: accounts[3]});
		const uint256tiRH0Zk = await DJCoinnGRwfFT.burn.call(uintePdkMVk, uintLPibHaN, {from: accounts[1]});
		const addressXfVJ4N = await DJCoinnGRwfFT.validRecipient.call(addressY9atvtg, {from: accounts[0]});
		const boolyDyqTb4 = await DJCoinnGRwfFT.transfer.call(addresszKpMph7, uintd1bKXnM, {from: accounts[2]});
		const address4Kx7jv = await DJCoinnGRwfFT.transferOwnership.call(addresskCjpMM3, {from: accounts[2]});

		assert.equal(booliQGyQLR, true)
		assert.equal(uint256tiRH0Zk, BigInt("1715910000000"))
		await expect(DJCoinnGRwfFT.validRecipient.call(addressY9atvtg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinLEHYG4m = await DJCoin.new({from: accounts[0]});
		const uintzXFNuTr = BigInt("153")
		const addressv0ItER5 = accounts[2]
		const uint256SXXycaG = await DJCoinLEHYG4m.totalSupply.call({from: accounts[2]});
		const addressC6LAQ1 = await DJCoinLEHYG4m.owner.call({from: accounts[2]});
		await DJCoinLEHYG4m.onlyOwner.call({from: accounts[4]});
		const boolSWNXqyj = await DJCoinLEHYG4m.decreaseAllowance.call(addressv0ItER5, uintzXFNuTr, {from: accounts[4]});
		await DJCoinLEHYG4m.renounceOwnership.call({from: accounts[2]});

		assert.equal(addressC6LAQ1, 0x32286D0332c1847BB968D9bB5D77069B85Dd785C)
		assert.equal(uint256SXXycaG, BigInt("2100000000000"))
		await expect(DJCoinLEHYG4m.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinEmhoYHO = await DJCoin.new({from: accounts[5]});
		const addressXwhgdy6 = accounts[2]
		const addressBFwaiTl = accounts[1]
		const addressOzbzsv5 = accounts[1]
		const address4pgiQG = await DJCoinEmhoYHO.transferOwnership.call(addressXwhgdy6, {from: accounts[5]});
		const uint256bMqqYOW = await DJCoinEmhoYHO.allowance.call(addressOzbzsv5, addressBFwaiTl, {from: accounts[0]});
		await DJCoinEmhoYHO.renounceOwnership.call({from: accounts[2]});

		assert.equal(uint256bMqqYOW, BigInt("0"))
		await expect(DJCoinEmhoYHO.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinnGRwfFT = await DJCoin.new({from: accounts[1]});
		const uintkhdkFRM = BigInt("0")
		const addresssJYSp6m = accounts[5]
		const uintiOXwmM1 = BigInt("564")
		const addressZej7k30 = accounts[3]
		const uintXrSQCA = BigInt("1697")
		const addressP7zqxVz = accounts[3]
		const uintV42TqPY = BigInt("1056")
		const addressK1NqRdW = accounts[1]
		const uintdhKM0q = BigInt("1958")
		const uintrtTvghi = BigInt("1084")
		const addressmwuUREZ = accounts[4]
		const addressbm9hKdr = accounts[5]
		const address8OjKP1 = accounts[4]
		const boolyDyqTb4 = await DJCoinnGRwfFT.transfer.call(addresssJYSp6m, uintkhdkFRM, {from: accounts[2]});
		const booly6bf4DA = await DJCoinnGRwfFT.transfer.call(addressZej7k30, uintiOXwmM1, {from: accounts[4]});
		const boolgBMTL7A = await DJCoinnGRwfFT.increaseAllowance.call(addressP7zqxVz, uintXrSQCA, {from: accounts[3]});
		await DJCoinnGRwfFT.renounceOwnership.call({from: accounts[1]});
		const addressymFmkib = await DJCoinnGRwfFT.owner.call({from: accounts[2]});
		const boolEigPah7 = await DJCoinnGRwfFT.increaseAllowance.call(addressK1NqRdW, uintV42TqPY, {from: accounts[3]});
		const uint256bHeQhZr = await DJCoinnGRwfFT.burn.call(uintrtTvghi, uintdhKM0q, {from: accounts[4]});
		const uint256g6t8yq = await DJCoinnGRwfFT.balanceOf.call(addressmwuUREZ, {from: accounts[0]});
		const uint256a26tm3p = await DJCoinnGRwfFT.allowance.call(address8OjKP1, addressbm9hKdr, {from: accounts[1]});

		assert.equal(boolyDyqTb4, true)
		await expect(DJCoinnGRwfFT.transfer.call(addressZej7k30, uintiOXwmM1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})