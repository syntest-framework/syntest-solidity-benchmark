const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinMiYJ9k4 = await FreakCoin.new({from: accounts[4]});
		const uintmEdbEZ = BigInt("1928")
		const addressNI1rfQ3 = accounts[0]
		const addressUV7ePXI = accounts[0]
		const addressoZCp8GT = accounts[4]
		const addressqjuylIG = accounts[4]
//		const boolYg01nhj = await FreakCoinMiYJ9k4.transferFrom.call(addressUV7ePXI, addressNI1rfQ3, uintmEdbEZ, {from: accounts[2]});
//		const uint256KgaLUhq = await FreakCoinMiYJ9k4.allUserBalances.call(addressoZCp8GT, {from: accounts[3]});
//		const uint256nwgpWXH = await FreakCoinMiYJ9k4.allUserBalances.call(addressqjuylIG, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FreakCoinMiYJ9k4.transferFrom.call(addressUV7ePXI, addressNI1rfQ3, uintmEdbEZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinmfKf4D8 = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintEOqbp8k = BigInt("1485")
		const addresskrUrOGZ = accounts[0]
		const addressji20WUX = accounts[1]
		const uintrBGsgsF = BigInt("1097")
		const addressX4QLpsP = accounts[0]
		const addresswKIkhJ = accounts[2]
		const addressVO8AqVc = accounts[1]
		const booltApkRhU = await FreakCoinmfKf4D8.transferFrom.call(addressji20WUX, addresskrUrOGZ, uintEOqbp8k, {from: accounts[2]});
		const boolw4QZTol = await FreakCoinmfKf4D8.approve.call(addressX4QLpsP, uintrBGsgsF, {from: accounts[1]});
		const uint256rtuWa27 = await FreakCoinmfKf4D8.allowance.call(addressVO8AqVc, addresswKIkhJ, {from: accounts[2]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoinMLMnyWn = await FreakCoin.new({from: accounts[3]});
		const addressdKzRFQQ = accounts[4]
		const addressiQqHqoU = accounts[0]
		const addressfRADVuG = "0x0000000000000000000000000000000000000001"
		const addressPPbWRG = accounts[4]
		const addressfKqWrBK = accounts[0]
//		const uint256Z4kPSoS = await FreakCoinMLMnyWn.allUserBalances.call(addressdKzRFQQ, {from: accounts[2]});
//		const uint256HVosYt2 = await FreakCoinMLMnyWn.allUserBalances.call(addressiQqHqoU, {from: accounts[5]});
//		const uint2562c9SIR = await FreakCoinMLMnyWn.balanceOf.call(addressfRADVuG, {from: accounts[5]});
//		const uint256L2wNEli = await FreakCoinMLMnyWn.balanceOf.call(addressPPbWRG, {from: accounts[2]});
//		const uint256tkuWhaC = await FreakCoinMLMnyWn.allUserBalances.call(addressfKqWrBK, {from: accounts[2]});
//		const addressSNqLHxB = await FreakCoinMLMnyWn.uniswapAddress.call({from: accounts[4]});

		await expect(FreakCoinMLMnyWn.allUserBalances.call(addressdKzRFQQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinfMlfQII = await FreakCoin.new({from: accounts[2]});
		const uintPkcl8PE = BigInt("388")
		const addressdlYp2bi = accounts[4]
		const addresseQ2WBYQ = await FreakCoinfMlfQII.uniswapAddress.call({from: accounts[2]});
		const boolZaUJat6 = await FreakCoinfMlfQII.approve.call(addressdlYp2bi, uintPkcl8PE, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addresseQ2WBYQ, 0x0000000000000000000000000000000000000000)
		assert.equal(boolZaUJat6, true)
	});

	it('test for FreakCoin', async () => {
		const FreakCoini6DHO6w = await FreakCoin.new({from: accounts[3]});
		const addressZXdeEFl = accounts[2]
		const addressGn2hGV = accounts[4]
		const addresstvhnUPX = accounts[0]
		const addressdFP0Bfz = await FreakCoini6DHO6w.uniswapAddress.call({from: accounts[5]});
//		const addressDl2SWP6 = await FreakCoini6DHO6w.setUniswapAddress.call(addressZXdeEFl, {from: accounts[2]});
//		const uint256iTVidKa = await FreakCoini6DHO6w.balanceOf.call(addressGn2hGV, {from: accounts[0]});
//		const address6hlhyI = await FreakCoini6DHO6w.setUniswapAddress.call(addresstvhnUPX, {from: accounts[2]});

		assert.equal(addressdFP0Bfz, 0x0000000000000000000000000000000000000000)
		await expect(FreakCoini6DHO6w.setUniswapAddress.call(addressZXdeEFl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinPR6HbGG = await FreakCoin.new({from: accounts[0]});
		const uintLXb8ju4 = BigInt("983")
		const addresshH9P0aB = accounts[2]
		const boolVOFhjs = await FreakCoinPR6HbGG.transfer.call(addresshH9P0aB, uintLXb8ju4, {from: accounts[0]});
		const addresswlbv8uV = await FreakCoinPR6HbGG.uniswapAddress.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addresswlbv8uV, 0x0000000000000000000000000000000000000000)
		assert.equal(boolVOFhjs, true)
	});

	it('test for FreakCoin', async () => {
		const FreakCoinPR6HbGG = await FreakCoin.new({from: accounts[0]});
		const addressrbuMj0e = accounts[4]
		const addressaSY2sj = accounts[1]
		const uint81WsRG = BigInt("983")
		const addressibE8jYx = accounts[3]
		const addressp98UpJh = "0x0000000000000000000000000000000000000001"
		const addresshMlBXQI = await FreakCoinPR6HbGG.uniswapAddress.call({from: accounts[3]});
		const uint256nfervsY = await FreakCoinPR6HbGG.allowance.call(addressaSY2sj, addressrbuMj0e, {from: accounts[5]});
		const boolVOFhjs = await FreakCoinPR6HbGG.transfer.call(addressibE8jYx, uint81WsRG, {from: accounts[0]});
//		const uint256SsGz3nO = await FreakCoinPR6HbGG.allUserBalances.call(addressp98UpJh, {from: accounts[5]});
//		const addresswlbv8uV = await FreakCoinPR6HbGG.uniswapAddress.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addresshMlBXQI, 0x0000000000000000000000000000000000000000)
		assert.equal(boolVOFhjs, true)
		assert.equal(uint256nfervsY, BigInt("0"))
		await expect(FreakCoinPR6HbGG.allUserBalances.call(addressp98UpJh, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinCa12d2j = await FreakCoin.new({from: accounts[0]});
		const addressJcuAsqW = accounts[1]
		const addressh2tkbXu = "0x0000000000000000000000000000000000000001"
		const uintfGXHVJg = BigInt("1079")
		const addressqoeOYdC = accounts[2]
		const addressWE6efO = await FreakCoinCa12d2j.setUniswapAddress.call(addressJcuAsqW, {from: accounts[0]});
//		const uint256EszYnT = await FreakCoinCa12d2j.allUserBalances.call(addressh2tkbXu, {from: accounts[0]});
//		const boolfwLFTJ = await FreakCoinCa12d2j.approve.call(addressqoeOYdC, uintfGXHVJg, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FreakCoinCa12d2j.allUserBalances.call(addressh2tkbXu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinPR6HbGG = await FreakCoin.new({from: accounts[0]});
		const uintRNb7u6n = BigInt("1094")
		const addressBXpsgyu = "0x0000000000000000000000000000000000000001"
		const uintfsvBhNJ = BigInt("861")
		const addressXJBpPzv = accounts[0]
		const uintTLHhDo0 = BigInt("823")
		const addresstKOnHzX = accounts[3]
		const addresskSAaya1 = accounts[2]
		const addressE9twSb = accounts[0]
		const addressqThLznA = accounts[2]
		const uintJ9zP0Sh = BigInt("1884")
		const addressY5qEkzQ = accounts[4]
		const addressTCFSSUN = accounts[4]
		const boolXT5E6bH = await FreakCoinPR6HbGG.transfer.call(addressBXpsgyu, uintRNb7u6n, {from: accounts[0]});
		const booljMLzmkS = await FreakCoinPR6HbGG.transfer.call(addressXJBpPzv, uintfsvBhNJ, {from: accounts[0]});
//		const boolGbu1bPW = await FreakCoinPR6HbGG.transferFrom.call(addresskSAaya1, addresstKOnHzX, uintTLHhDo0, {from: accounts[1]});
//		const uint256IaDU4tl = await FreakCoinPR6HbGG.allowance.call(addressqThLznA, addressE9twSb, {from: accounts[1]});
//		const boolvWg0Ns = await FreakCoinPR6HbGG.transferFrom.call(addressTCFSSUN, addressY5qEkzQ, uintJ9zP0Sh, {from: accounts[3]});

		assert.equal(boolXT5E6bH, true)
		assert.equal(booljMLzmkS, true)
		await expect(FreakCoinPR6HbGG.transferFrom.call(addresskSAaya1, addresstKOnHzX, uintTLHhDo0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})