const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinBE5HFT = await EdenCoin.new({from: accounts[1]});
		const uintHEazoNB = BigInt("178")
		const addressK1NUoeZ = accounts[3]
		const uintcNZ5vxr = BigInt("1897")
		const addressmHP1oBH = accounts[1]
		const addressIctVkVO = accounts[2]
		const uintg4CRnSO = BigInt("1531")
		const addressFS7fQi9 = accounts[2]
		const uintGY1a8JV = BigInt("1464")
		const addressMmngCMk = accounts[4]
		const boolO4rODZ4 = await EdenCoinBE5HFT.approve.call(addressK1NUoeZ, uintHEazoNB, {from: "0x0000000000000000000000000000000000000001"});
//		const boolcX7d0b7 = await EdenCoinBE5HFT.transferFrom.call(addressIctVkVO, addressmHP1oBH, uintcNZ5vxr, {from: accounts[4]});
//		const boolAF7lIps = await EdenCoinBE5HFT.transfer.call(addressFS7fQi9, uintg4CRnSO, {from: "0x0000000000000000000000000000000000000001"});
//		const boolRlsHQYU = await EdenCoinBE5HFT.approve.call(addressMmngCMk, uintGY1a8JV, {from: accounts[4]});

		assert.equal(boolO4rODZ4, true)
		await expect(EdenCoinBE5HFT.transferFrom.call(addressIctVkVO, addressmHP1oBH, uintcNZ5vxr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinWVHmJmi = await EdenCoin.new({from: accounts[5]});
		const addressymCVS24 = accounts[0]
		const address4NDQaB = accounts[1]
		const uintJFJw7fT = BigInt("197")
		const addressvpX3zij = accounts[1]
		const uintzpWzdO1 = BigInt("113")
		const address2RJjfA = accounts[1]
		const addressl69v1lP = accounts[4]
		const uintyCDnM8K = BigInt("362")
		const address5I8VIh = accounts[4]
		const uintVW4ldA3 = BigInt("1425")
		const addressTe3RMak = "0x0000000000000000000000000000000000000001"
		const addressYnRlde2 = accounts[1]
		const uintP71S2E9 = BigInt("1843")
		const addressC9riHQZ = accounts[5]
		const uint256ANlmxz4 = await EdenCoinWVHmJmi.allowance.call(address4NDQaB, addressymCVS24, {from: accounts[2]});
		const boolmGIArcs = await EdenCoinWVHmJmi.approve.call(addressvpX3zij, uintJFJw7fT, {from: accounts[3]});
//		const boolrJiEkqn = await EdenCoinWVHmJmi.transferFrom.call(addressl69v1lP, address2RJjfA, uintzpWzdO1, {from: accounts[0]});
//		const boolL7suPDB = await EdenCoinWVHmJmi.approve.call(address5I8VIh, uintyCDnM8K, {from: accounts[0]});
//		const boolDHWg81 = await EdenCoinWVHmJmi.transferFrom.call(addressYnRlde2, addressTe3RMak, uintVW4ldA3, {from: "0x0000000000000000000000000000000000000001"});
//		const booldu0sn0U = await EdenCoinWVHmJmi.approve.call(addressC9riHQZ, uintP71S2E9, {from: accounts[3]});

		assert.equal(boolmGIArcs, true)
		assert.equal(uint256ANlmxz4, BigInt("0"))
		await expect(EdenCoinWVHmJmi.transferFrom.call(addressl69v1lP, address2RJjfA, uintzpWzdO1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinLiiM29c = await EdenCoin.new({from: accounts[0]});
		const uintGn6xAYt = BigInt("369")
		const addressXs9Hr0R = accounts[5]
		const addressgri76RT = accounts[3]
		const addressFNtrmBX = accounts[3]
		const uinti9Vb3w = BigInt("709")
		const addressNNqeBLP = accounts[5]
		const uintQGMAKLD = BigInt("1210")
		const addresshVTPt2A = accounts[1]
		const addressHIoiDom = accounts[4]
		const uintT2b9o5K = BigInt("1123")
		const addresshEjSLkz = accounts[0]
		const addressPLkXoHI = accounts[4]
		const uintBILuXsj = BigInt("491")
		const addressLiq0YPu = "0x0000000000000000000000000000000000000001"
		const booljut0b2k = await EdenCoinLiiM29c.decreaseApproval.call(addressXs9Hr0R, uintGn6xAYt, {from: "0x0000000000000000000000000000000000000001"});
		const uint256nenhS6m = await EdenCoinLiiM29c.allowance.call(addressFNtrmBX, addressgri76RT, {from: accounts[1]});
		const boolztRrwpL = await EdenCoinLiiM29c.transfer.call(addressNNqeBLP, uinti9Vb3w, {from: accounts[0]});
//		const boolJ3xZpYJ = await EdenCoinLiiM29c.transferFrom.call(addressHIoiDom, addresshVTPt2A, uintQGMAKLD, {from: accounts[4]});
//		const boolxCWWmhD = await EdenCoinLiiM29c.transferFrom.call(addressPLkXoHI, addresshEjSLkz, uintT2b9o5K, {from: accounts[3]});
//		const boolawDlFQt = await EdenCoinLiiM29c.approve.call(addressLiq0YPu, uintBILuXsj, {from: accounts[3]});

		assert.equal(booljut0b2k, true)
		assert.equal(boolztRrwpL, true)
		assert.equal(uint256nenhS6m, BigInt("0"))
		await expect(EdenCoinLiiM29c.transferFrom.call(addressHIoiDom, addresshVTPt2A, uintQGMAKLD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoindvS120L = await EdenCoin.new({from: accounts[0]});
		const uintQx5WDjj = BigInt("241")
		const addressyaZxU3c = accounts[2]
		const addresshB3dkdA = accounts[0]
		const uintI3SdXvV = BigInt("683")
		const addressPBsOngY = accounts[5]
		const uintErf0QYE = BigInt("375")
		const addressgzAEUvs = accounts[4]
		const uintm3uzzYQ = BigInt("1313")
		const addressHYdJTwE = accounts[2]
		const uintJtQVhC2 = BigInt("549")
		const addressGq4RbEf = accounts[1]
		const boolkaj1ujc = await EdenCoindvS120L.increaseApproval.call(addressyaZxU3c, uintQx5WDjj, {from: accounts[2]});
		const uint256dFTTctq = await EdenCoindvS120L.balanceOf.call(addresshB3dkdA, {from: "0x0000000000000000000000000000000000000001"});
		const boolZKvj8o = await EdenCoindvS120L.increaseApproval.call(addressPBsOngY, uintI3SdXvV, {from: accounts[0]});
//		const boolqkdDuk = await EdenCoindvS120L.transfer.call(addressgzAEUvs, uintErf0QYE, {from: accounts[2]});
//		const booluZdITuI = await EdenCoindvS120L.increaseApproval.call(addressHYdJTwE, uintm3uzzYQ, {from: accounts[2]});
//		const boolqRUWnkG = await EdenCoindvS120L.transfer.call(addressGq4RbEf, uintJtQVhC2, {from: accounts[2]});

		assert.equal(boolZKvj8o, true)
		assert.equal(boolkaj1ujc, true)
		assert.equal(uint256dFTTctq, BigInt("1000000000000000000000000000"))
		await expect(EdenCoindvS120L.transfer.call(addressgzAEUvs, uintErf0QYE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinn0nhkBs = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJCenKg3 = BigInt("1514")
		const addressQZ7etAJ = accounts[4]
		const addressR5XNB9l = accounts[2]
		const uintcYS38n1 = BigInt("1922")
		const addressaWCfirM = accounts[0]
		const uintk9dRQPV = BigInt("178")
		const addressTtmVsrk = accounts[4]
		const addresse9Ja9SZ = accounts[3]
		const addresstFsnihE = accounts[4]
		const addressGJUnwC = accounts[1]
		const boolCKpHtTB = await EdenCoinn0nhkBs.transferFrom.call(addressR5XNB9l, addressQZ7etAJ, uintJCenKg3, {from: accounts[2]});
		const boolBub94yI = await EdenCoinn0nhkBs.transfer.call(addressaWCfirM, uintcYS38n1, {from: accounts[2]});
		const boolvqeEQbx = await EdenCoinn0nhkBs.increaseApproval.call(addressTtmVsrk, uintk9dRQPV, {from: accounts[3]});
		const uint256Hx6JwZw = await EdenCoinn0nhkBs.allowance.call(addresstFsnihE, addresse9Ja9SZ, {from: accounts[3]});
		const uint256tpKPYOV = await EdenCoinn0nhkBs.balanceOf.call(addressGJUnwC, {from: accounts[4]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinLiiM29c = await EdenCoin.new({from: accounts[0]});
		const uintITTEust = BigInt("0")
		const addressVluIeeY = accounts[6]
		const uintnomOvbh = BigInt("455")
		const addressi5ltU1 = accounts[2]
		const uintj9BMnJ9 = BigInt("1725")
		const addressLTCeAoL = accounts[4]
		const booljut0b2k = await EdenCoinLiiM29c.decreaseApproval.call(addressVluIeeY, uintITTEust, {from: "0x0000000000000000000000000000000000000001"});
		const boolaAWhS34 = await EdenCoinLiiM29c.decreaseApproval.call(addressi5ltU1, uintnomOvbh, {from: accounts[0]});
//		const boolOCixOvJ = await EdenCoinLiiM29c.transfer.call(addressLTCeAoL, uintj9BMnJ9, {from: accounts[3]});

		assert.equal(boolaAWhS34, true)
		assert.equal(booljut0b2k, true)
		await expect(EdenCoinLiiM29c.transfer.call(addressLTCeAoL, uintj9BMnJ9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})