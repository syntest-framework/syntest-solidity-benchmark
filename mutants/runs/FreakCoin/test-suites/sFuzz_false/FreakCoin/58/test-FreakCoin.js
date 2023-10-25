const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinzd67ojX = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressdheeeD = accounts[5]
		const addresslWxmSZu = accounts[5]
		const uint256OYJfZ6D = await FreakCoinzd67ojX.allUserBalances.call(addressdheeeD, {from: accounts[0]});
		const uint256D2aHKlc = await FreakCoinzd67ojX.allUserBalances.call(addresslWxmSZu, {from: "0x0000000000000000000000000000000000000001"});
		const addressylpDpJt = await FreakCoinzd67ojX.uniswapAddress.call({from: accounts[0]});
		const uint256psL5LPo = await FreakCoinzd67ojX.totalSupply.call({from: accounts[4]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoinv5VWhid = await FreakCoin.new({from: accounts[2]});
		const addressFdW6r7K = accounts[4]
		const uintVsUwgAd = BigInt("1285")
		const addressOBdfCd4 = accounts[3]
		const addressCeaOsCO = accounts[1]
		const address8j2oMO = accounts[4]
		const addressFEvbieM = accounts[1]
		const uintzK08lp = BigInt("21")
		const addressMCjCDPs = accounts[1]
		const uint256TveuG6z = await FreakCoinv5VWhid.balanceOf.call(addressFdW6r7K, {from: accounts[2]});
		const boolnuiPoYD = await FreakCoinv5VWhid.transfer.call(addressOBdfCd4, uintVsUwgAd, {from: accounts[5]});
		const uint256zJQbxae = await FreakCoinv5VWhid.balanceOf.call(addressCeaOsCO, {from: accounts[1]});
		const uint256VzaHp7s = await FreakCoinv5VWhid.allowance.call(addressFEvbieM, address8j2oMO, {from: accounts[1]});
		const boolv97SZ4B = await FreakCoinv5VWhid.transfer.call(addressMCjCDPs, uintzK08lp, {from: accounts[4]});

		assert.equal(uint256TveuG6z, BigInt("0"))
		await expect(FreakCoinv5VWhid.transfer.call(addressOBdfCd4, uintVsUwgAd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinAMaupVo = await FreakCoin.new({from: accounts[2]});
		const uintR7LFcD = BigInt("830")
		const addressB3gD6GV = "0x0000000000000000000000000000000000000001"
		const addressB3q9YTA = accounts[3]
		const addressfUlFs4y = "0x0000000000000000000000000000000000000001"
		const uintS5K3YxM = BigInt("1770")
		const addressqt7B8ns = accounts[2]
		const addresspn1nXUb = accounts[2]
		const addressvqWwjjg = accounts[0]
		const addresstQVzbWO = accounts[1]
		const addressn36UUvs = "0x0000000000000000000000000000000000000001"
		const addressMtbjjYq = accounts[1]
		const addressyoZFYnm = accounts[0]
		const boolu3ugjDy = await FreakCoinAMaupVo.transferFrom.call(addressB3q9YTA, addressB3gD6GV, uintR7LFcD, {from: accounts[1]});
		const addressEhV5oJG = await FreakCoinAMaupVo.setUniswapAddress.call(addressfUlFs4y, {from: accounts[3]});
		const boollLX4JYN = await FreakCoinAMaupVo.transferFrom.call(addresspn1nXUb, addressqt7B8ns, uintS5K3YxM, {from: accounts[2]});
		const uint256fWOZD9 = await FreakCoinAMaupVo.allowance.call(addresstQVzbWO, addressvqWwjjg, {from: accounts[2]});
		const uint256JYwRxXz = await FreakCoinAMaupVo.balanceOf.call(addressn36UUvs, {from: "0x0000000000000000000000000000000000000001"});
		const uint256DAKAkL = await FreakCoinAMaupVo.allowance.call(addressyoZFYnm, addressMtbjjYq, {from: accounts[1]});

		await expect(FreakCoinAMaupVo.transferFrom.call(addressB3q9YTA, addressB3gD6GV, uintR7LFcD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinkt3XMUO = await FreakCoin.new({from: accounts[1]});
		const addressSKuEp8U = accounts[2]
		const uintRZ7ZsZL = BigInt("72")
		const addressHjL46dD = accounts[3]
		const uint256Hz13k81 = await FreakCoinkt3XMUO.allUserBalances.call(addressSKuEp8U, {from: accounts[3]});
		const addressLRVXqdy = await FreakCoinkt3XMUO.uniswapAddress.call({from: accounts[4]});
		const boolO0Ry21N = await FreakCoinkt3XMUO.approve.call(addressHjL46dD, uintRZ7ZsZL, {from: accounts[4]});
		const uint256cjZQIsH = await FreakCoinkt3XMUO.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(FreakCoinkt3XMUO.allUserBalances.call(addressSKuEp8U, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinKmGOkjK = await FreakCoin.new({from: accounts[1]});
		const uintVxLDs8y = BigInt("1453")
		const addressOPFreHG = accounts[0]
		const boolO2XP1Ax = await FreakCoinKmGOkjK.transfer.call(addressOPFreHG, uintVxLDs8y, {from: accounts[1]});
		const uint256CMGA7I = await FreakCoinKmGOkjK.totalSupply.call({from: accounts[1]});

		assert.equal(boolO2XP1Ax, true)
		assert.equal(uint256CMGA7I, BigInt("1000000"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinht8HOTg = await FreakCoin.new({from: accounts[0]});
		const addressx8b4aRA = accounts[5]
		const uintkDUHIS = BigInt("120")
		const addressiSHGIm = accounts[4]
		const uintNbi3ksV = BigInt("1013")
		const addressfQlJch0 = accounts[3]
		const addresshrsn21h = await FreakCoinht8HOTg.uniswapAddress.call({from: accounts[0]});
		const uint256DTYldNz = await FreakCoinht8HOTg.balanceOf.call(addressx8b4aRA, {from: accounts[4]});
		const boolIw2LHU8 = await FreakCoinht8HOTg.approve.call(addressiSHGIm, uintkDUHIS, {from: accounts[4]});
		const boolGH77WaW = await FreakCoinht8HOTg.transfer.call(addressfQlJch0, uintNbi3ksV, {from: accounts[2]});

		assert.equal(addresshrsn21h, 0x0000000000000000000000000000000000000000)
		assert.equal(boolIw2LHU8, true)
		assert.equal(uint256DTYldNz, BigInt("0"))
		await expect(FreakCoinht8HOTg.transfer.call(addressfQlJch0, uintNbi3ksV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinpt88kxv = await FreakCoin.new({from: accounts[2]});
		const addresspR6ix7s = accounts[3]
		const addresso66GU59 = accounts[3]
		const uintsOJGoKf = BigInt("1817")
		const addressK9aXUao = accounts[2]
		const addressi91iW99 = await FreakCoinpt88kxv.uniswapAddress.call({from: accounts[3]});
		const uint256OubRITe = await FreakCoinpt88kxv.allowance.call(addresso66GU59, addresspR6ix7s, {from: accounts[3]});
		const bool0DvpEL = await FreakCoinpt88kxv.transfer.call(addressK9aXUao, uintsOJGoKf, {from: accounts[1]});

		assert.equal(addressi91iW99, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256OubRITe, BigInt("0"))
		await expect(FreakCoinpt88kxv.transfer.call(addressK9aXUao, uintsOJGoKf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinKmGOkjK = await FreakCoin.new({from: accounts[1]});
		const uintUd1qBm7 = BigInt("1453")
		const addressuaMrBSA = accounts[1]
		const addresscr7w2wG = accounts[2]
		const addressj3Ud5E2 = accounts[2]
		const boolO2XP1Ax = await FreakCoinKmGOkjK.transfer.call(addressuaMrBSA, uintUd1qBm7, {from: accounts[1]});
		const uint256Ns57rUh = await FreakCoinKmGOkjK.allowance.call(addressj3Ud5E2, addresscr7w2wG, {from: accounts[2]});
		const uint256CMGA7I = await FreakCoinKmGOkjK.totalSupply.call({from: accounts[1]});

		assert.equal(boolO2XP1Ax, true)
		assert.equal(uint256CMGA7I, BigInt("1000000"))
		assert.equal(uint256Ns57rUh, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinKmGOkjK = await FreakCoin.new({from: accounts[1]});
		const addressMBIMUG = accounts[4]
		const uintQlsgkYS = BigInt("1565")
		const addressYIKP2fd = accounts[2]
		const uintCg1TJLr = BigInt("1950")
		const addressYBj0pZA = accounts[2]
		const addresskuUUV7T = accounts[0]
		const uintAyDkO2v = BigInt("1453")
		const addressy0OoXGw = accounts[1]
		const addressxrPDdeJ = await FreakCoinKmGOkjK.setUniswapAddress.call(addressMBIMUG, {from: accounts[4]});
		const booltO9h0k2 = await FreakCoinKmGOkjK.approve.call(addressYIKP2fd, uintQlsgkYS, {from: accounts[4]});
		const boolMdLNi6S = await FreakCoinKmGOkjK.transferFrom.call(addresskuUUV7T, addressYBj0pZA, uintCg1TJLr, {from: accounts[4]});
		const boolO2XP1Ax = await FreakCoinKmGOkjK.transfer.call(addressy0OoXGw, uintAyDkO2v, {from: accounts[1]});

		await expect(FreakCoinKmGOkjK.setUniswapAddress.call(addressMBIMUG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})