const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinffQAWDJ = await FreakCoin.new({from: accounts[2]});
		const addressbCv5726 = accounts[2]
		const addressqQspSKk = accounts[2]
		const addressxoj5NWR = accounts[2]
		const uintNhxpUz = BigInt("1073")
		const addressgtbpxql = accounts[0]
		const addressR9JycE6 = accounts[5]
		const addressncBkFp = accounts[1]
		const uintwjFFKZr = BigInt("413")
		const addressPVtOf1G = accounts[1]
		const addresspQD9P8X = accounts[2]
		const uint2560Fd0sO = await FreakCoinffQAWDJ.allowance.call(addressqQspSKk, addressbCv5726, {from: accounts[0]});
		const addressrZSmZSi = await FreakCoinffQAWDJ.setUniswapAddress.call(addressxoj5NWR, {from: accounts[1]});
		const boolKcdSAsR = await FreakCoinffQAWDJ.approve.call(addressgtbpxql, uintNhxpUz, {from: accounts[1]});
		const uint2567xWMW1 = await FreakCoinffQAWDJ.allowance.call(addressncBkFp, addressR9JycE6, {from: accounts[0]});
		const boolGe7S2kN = await FreakCoinffQAWDJ.transferFrom.call(addresspQD9P8X, addressPVtOf1G, uintwjFFKZr, {from: accounts[1]});

		assert.equal(uint2560Fd0sO, BigInt("0"))
		await expect(FreakCoinffQAWDJ.setUniswapAddress.call(addressxoj5NWR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinldMNr3H = await FreakCoin.new({from: accounts[2]});
		const addressuxZ7dmu = accounts[1]
		const uint256jXOQSX = await FreakCoinldMNr3H.balanceOf.call(addressuxZ7dmu, {from: accounts[4]});
		const uint256s1FJSAb = await FreakCoinldMNr3H.totalSupply.call({from: accounts[0]});

		assert.equal(uint256jXOQSX, BigInt("0"))
		assert.equal(uint256s1FJSAb, BigInt("1000000"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinaF3ejvc = await FreakCoin.new({from: accounts[5]});
		const uintMD8X2h = BigInt("622")
		const address5RHqng = accounts[4]
		const addressKE3nQu3 = accounts[3]
		const uintyCTGT7q = BigInt("1298")
		const addressQm19Nox = accounts[4]
		const addressaSZy1e9 = accounts[3]
		const uintI7lOjk = BigInt("1378")
		const addresstHT5D74 = accounts[5]
		const uint256dk3L92v = await FreakCoinaF3ejvc.totalSupply.call({from: accounts[0]});
		const booltQNFZdk = await FreakCoinaF3ejvc.transferFrom.call(addressKE3nQu3, address5RHqng, uintMD8X2h, {from: accounts[5]});
		const boolPWx0iZB = await FreakCoinaF3ejvc.approve.call(addressQm19Nox, uintyCTGT7q, {from: accounts[3]});
		const addressOSGFvSt = await FreakCoinaF3ejvc.setUniswapAddress.call(addressaSZy1e9, {from: accounts[0]});
		const boollID6XzZ = await FreakCoinaF3ejvc.transfer.call(addresstHT5D74, uintI7lOjk, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256dk3L92v, BigInt("1000000"))
		await expect(FreakCoinaF3ejvc.transferFrom.call(addressKE3nQu3, address5RHqng, uintMD8X2h, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinb5Q8eWz = await FreakCoin.new({from: accounts[0]});
		const addresssND83Dj = accounts[3]
		const addressGONcrw6 = "0x0000000000000000000000000000000000000001"
		const addressW6YGpqf = accounts[5]
		const uint256UcbFbD = await FreakCoinb5Q8eWz.allUserBalances.call(addresssND83Dj, {from: accounts[2]});
		const uint256JJyFw3u = await FreakCoinb5Q8eWz.allowance.call(addressW6YGpqf, addressGONcrw6, {from: accounts[4]});
		const addressTaGYYG7 = await FreakCoinb5Q8eWz.uniswapAddress.call({from: accounts[3]});

		await expect(FreakCoinb5Q8eWz.allUserBalances.call(addresssND83Dj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinz6sbZRG = await FreakCoin.new({from: accounts[5]});
		const uintVQEQ8Zo = BigInt("1707")
		const addressPKGIkoF = accounts[5]
		const addressObLo69k = accounts[3]
		const addressMYxHvNa = accounts[2]
		const addressFas38ha = accounts[0]
		const booljBNRNLb = await FreakCoinz6sbZRG.transfer.call(addressPKGIkoF, uintVQEQ8Zo, {from: accounts[4]});
		const uint256bdydUNI = await FreakCoinz6sbZRG.totalSupply.call({from: accounts[3]});
		const uint256BqHQhF7 = await FreakCoinz6sbZRG.allowance.call(addressMYxHvNa, addressObLo69k, {from: accounts[2]});
		const uint256Qj8P8Sj = await FreakCoinz6sbZRG.balanceOf.call(addressFas38ha, {from: accounts[3]});

		await expect(FreakCoinz6sbZRG.transfer.call(addressPKGIkoF, uintVQEQ8Zo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinfsHZiRJ = await FreakCoin.new({from: accounts[5]});
		const uintva7urOa = BigInt("846")
		const addressTrIWjAh = accounts[5]
		const addressulXvCXh = accounts[3]
		const addressYb0Y4vv = await FreakCoinfsHZiRJ.uniswapAddress.call({from: accounts[4]});
		const boolRRqnMry = await FreakCoinfsHZiRJ.transferFrom.call(addressulXvCXh, addressTrIWjAh, uintva7urOa, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressYb0Y4vv, 0x0000000000000000000000000000000000000000)
		await expect(FreakCoinfsHZiRJ.transferFrom.call(addressulXvCXh, addressTrIWjAh, uintva7urOa, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoin8DCMh6 = await FreakCoin.new({from: accounts[1]});
		const uintVidLSv = BigInt("624")
		const addressMiGnzW = accounts[5]
		const addressQdgmk7k = accounts[5]
		const booleZJVzlf = await FreakCoin8DCMh6.approve.call(addressMiGnzW, uintVidLSv, {from: accounts[4]});
		const addressDXOztu = await FreakCoin8DCMh6.setUniswapAddress.call(addressQdgmk7k, {from: accounts[0]});

		assert.equal(booleZJVzlf, true)
		await expect(FreakCoin8DCMh6.setUniswapAddress.call(addressQdgmk7k, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinQWArmx3 = await FreakCoin.new({from: accounts[0]});
		const uintQVUmrrT = BigInt("518")
		const addressccufvc = accounts[1]
		const uintf5CFCe0 = BigInt("964")
		const addressVpBiUZ = accounts[3]
		const boolKhh3EEE = await FreakCoinQWArmx3.transfer.call(addressccufvc, uintQVUmrrT, {from: accounts[0]});
		const boolQfvGFf6 = await FreakCoinQWArmx3.transfer.call(addressVpBiUZ, uintf5CFCe0, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolKhh3EEE, true)
		await expect(FreakCoinQWArmx3.transfer.call(addressVpBiUZ, uintf5CFCe0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoineQhJTYj = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const address9XFKOM = "0x0000000000000000000000000000000000000001"
		const addressxauKb1N = accounts[1]
		const uint256OEQ2bzM = await FreakCoineQhJTYj.balanceOf.call(address9XFKOM, {from: accounts[1]});
		const addressgFjQe0V = await FreakCoineQhJTYj.uniswapAddress.call({from: accounts[0]});
		const uint256V1pkFRa = await FreakCoineQhJTYj.allUserBalances.call(addressxauKb1N, {from: accounts[5]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoinQWArmx3 = await FreakCoin.new({from: accounts[0]});
		const uintjFYRsPp = BigInt("522")
		const addressQpxWmE6 = accounts[5]
		const uintlAYecUF = BigInt("1157")
		const addresscuBSSNd = accounts[0]
		const addressHexLUS = accounts[4]
		const boolKhh3EEE = await FreakCoinQWArmx3.transfer.call(addressQpxWmE6, uintjFYRsPp, {from: accounts[0]});
		const booliONYlzm = await FreakCoinQWArmx3.transfer.call(addresscuBSSNd, uintlAYecUF, {from: accounts[0]});
		const uint256Z1cnn6M = await FreakCoinQWArmx3.allUserBalances.call(addressHexLUS, {from: accounts[1]});

		assert.equal(boolKhh3EEE, true)
		assert.equal(booliONYlzm, true)
		await expect(FreakCoinQWArmx3.allUserBalances.call(addressHexLUS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})