const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const ETFXPoolWRrB0EX = await ETFXPool.new({from: accounts[3]});
		const uintLjxeMBS = BigInt("1062")
		const addresskTIWCwb = "0x0000000000000000000000000000000000000001"
//		await ETFXPoolWRrB0EX.exit.call({from: accounts[4]});
//		const uint256VPT0jDA = await ETFXPoolWRrB0EX.stake.call(uintLjxeMBS, {from: "0x0000000000000000000000000000000000000001"});
//		const addresso9EDwqO = await ETFXPoolWRrB0EX.transferOwnership.call(addresskTIWCwb, {from: accounts[4]});

		await expect(ETFXPoolWRrB0EX.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolSRjZgb7 = await ETFXPool.new({from: accounts[1]});
		const uintjuCLh3h = BigInt("1895")
		const addressuZpGch = accounts[4]
		const addressfSZsSmr = accounts[4]
		const addresse2hiONB = accounts[3]
		const addressTikYhUn = accounts[4]
		const uint8RU9pn8G = await ETFXPoolSRjZgb7.decimals.call({from: accounts[3]});
//		const boolK6twuPy = await ETFXPoolSRjZgb7.decreaseAllowance.call(addressuZpGch, uintjuCLh3h, {from: accounts[4]});
//		const uint256K4juf8F = await ETFXPoolSRjZgb7.earned.call(addressfSZsSmr, {from: accounts[1]});
//		const addressTeeQC5e = await ETFXPoolSRjZgb7.transferOwnership.call(addresse2hiONB, {from: accounts[2]});
//		const addressBs0vCNB = await ETFXPoolSRjZgb7.transferOwnership.call(addressTikYhUn, {from: accounts[0]});

		assert.equal(uint8RU9pn8G, BigInt("8"))
		await expect(ETFXPoolSRjZgb7.decreaseAllowance.call(addressuZpGch, uintjuCLh3h, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooliGIOfcM = await ETFXPool.new({from: accounts[4]});
		const addressLWfBJO2 = accounts[1]
		const addresskiJ2g1z = accounts[4]
		const uintLHNOZeo = BigInt("1958")
		const addressAdAnQH = accounts[4]
//		await ETFXPooliGIOfcM.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressO6u8s0x = await ETFXPooliGIOfcM.transferOwnership.call(addressLWfBJO2, {from: accounts[3]});
//		const uint256VG1CFFI = await ETFXPooliGIOfcM.earned.call(addresskiJ2g1z, {from: accounts[2]});
//		const addressfaoiHDd = await ETFXPooliGIOfcM.owner.call({from: accounts[1]});
//		const boolPcNYV3u = await ETFXPooliGIOfcM.approve.call(addressAdAnQH, uintLHNOZeo, {from: accounts[4]});

		await expect(ETFXPooliGIOfcM.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolp4HafqA = await ETFXPool.new({from: accounts[4]});
		const uint256RF07gZu = await ETFXPoolp4HafqA.totalSupply.call({from: accounts[3]});
		const uint8YaQ6QoV = await ETFXPoolp4HafqA.decimals.call({from: accounts[1]});
//		await ETFXPoolp4HafqA.getReward.call({from: accounts[3]});

		assert.equal(uint256RF07gZu, BigInt("0"))
		assert.equal(uint8YaQ6QoV, BigInt("8"))
		await expect(ETFXPoolp4HafqA.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolSFpfm5Q = await ETFXPool.new({from: accounts[3]});
		const addressa7E4FIU = accounts[2]
		const addressl8I0uyX = accounts[4]
		const uint3GLnjz = BigInt("958")
		const addresslRhsnvV = accounts[5]
		const uintTGCBC0k = BigInt("1101")
		const addressNI76zYg = accounts[1]
		const uint256ck7NDj4 = await ETFXPoolSFpfm5Q.allowance.call(addressl8I0uyX, addressa7E4FIU, {from: accounts[4]});
		const boolU01JdZa = await ETFXPoolSFpfm5Q.approve.call(addresslRhsnvV, uint3GLnjz, {from: accounts[3]});
		const boolnDYCTzE = await ETFXPoolSFpfm5Q.approve.call(addressNI76zYg, uintTGCBC0k, {from: accounts[3]});

		assert.equal(boolU01JdZa, true)
		assert.equal(boolnDYCTzE, true)
		assert.equal(uint256ck7NDj4, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolrUfho9Y = await ETFXPool.new({from: accounts[2]});
		const addressxVLTmMZ = accounts[4]
		const addressnnp8art = accounts[3]
		const uintlvRM3k0 = BigInt("960")
		const addresssqexkyF = accounts[5]
		const addressmy5OSrt = "0x0000000000000000000000000000000000000001"
		const uint256Yzi87Rj = await ETFXPoolrUfho9Y.allowance.call(addressnnp8art, addressxVLTmMZ, {from: "0x0000000000000000000000000000000000000001"});
//		await ETFXPoolrUfho9Y.renounceOwnership.call({from: accounts[2]});
//		const stringyCUkQvH = await ETFXPoolrUfho9Y.symbol.call({from: accounts[3]});
//		await ETFXPoolrUfho9Y.exit.call({from: accounts[2]});
//		await ETFXPoolrUfho9Y.renounceOwnership.call({from: accounts[4]});
//		const boolw9FBbo = await ETFXPoolrUfho9Y.transferFrom.call(addressmy5OSrt, addresssqexkyF, uintlvRM3k0, {from: accounts[3]});

		assert.equal(uint256Yzi87Rj, BigInt("0"))
		await expect(ETFXPoolrUfho9Y.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolxL5tuYj = await ETFXPool.new({from: accounts[0]});
		const uintDM3B9PF = BigInt("883")
		const addressDx6b1Qa = accounts[0]
		const addressNn6uqNC = accounts[2]
		const addressEN66jbY = accounts[1]
//		const uint256I8SjP6l = await ETFXPoolxL5tuYj.withdraw.call(uintDM3B9PF, {from: accounts[0]});
//		const uint256cmRMXIv = await ETFXPoolxL5tuYj.allowance.call(addressNn6uqNC, addressDx6b1Qa, {from: accounts[5]});
//		const uint256rNFAllT = await ETFXPoolxL5tuYj.earned.call(addressEN66jbY, {from: accounts[2]});
//		await ETFXPoolxL5tuYj.onlyOwner.call({from: accounts[0]});

		await expect(ETFXPoolxL5tuYj.withdraw.call(uintDM3B9PF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPool56gb13 = await ETFXPool.new({from: accounts[0]});
		const uintaMEjAI3 = BigInt("1978")
		const addresslddkJAx = accounts[4]
		const uintZXBEEG5 = BigInt("1412")
		const addressnPfWWt7 = accounts[1]
		const boolxrVRAEP = await ETFXPool56gb13.increaseAllowance.call(addresslddkJAx, uintaMEjAI3, {from: accounts[3]});
		const uint256zCyDhZ = await ETFXPool56gb13.rewardPerToken.call({from: accounts[4]});
		const uint256sdHhgw8 = await ETFXPool56gb13.totalSupply.call({from: accounts[4]});
		const stringlzQZ85y = await ETFXPool56gb13.name.call({from: accounts[2]});
//		await ETFXPool56gb13.onlyOwner.call({from: accounts[2]});
//		const boolUOHCBPb = await ETFXPool56gb13.transfer.call(addressnPfWWt7, uintZXBEEG5, {from: accounts[4]});

		assert.equal(boolxrVRAEP, true)
		assert.equal(stringlzQZ85y, "ETFX-FARM")
		assert.equal(uint256sdHhgw8, BigInt("0"))
		assert.equal(uint256zCyDhZ, BigInt("0"))
		await expect(ETFXPool56gb13.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolp4HafqA = await ETFXPool.new({from: accounts[4]});
		const uintmDIKQHw = BigInt("1386")
		const addressuYSLask = accounts[2]
		const addressnU3VG7K = accounts[0]
		const uint256RF07gZu = await ETFXPoolp4HafqA.totalSupply.call({from: accounts[3]});
//		const boolin5EJq = await ETFXPoolp4HafqA.transferFrom.call(addressnU3VG7K, addressuYSLask, uintmDIKQHw, {from: accounts[5]});
//		const uint8YaQ6QoV = await ETFXPoolp4HafqA.decimals.call({from: accounts[1]});
//		await ETFXPoolp4HafqA.getReward.call({from: accounts[3]});
//		const stringS3UOJj9 = await ETFXPoolp4HafqA.name.call({from: accounts[0]});

		assert.equal(uint256RF07gZu, BigInt("0"))
		await expect(ETFXPoolp4HafqA.transferFrom.call(addressnU3VG7K, addressuYSLask, uintmDIKQHw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolZ9zi3mE = await ETFXPool.new({from: accounts[3]});
		const addressBoEEKxF = accounts[2]
		const uintY8y53i2 = BigInt("190")
		const addressAUcNPln = accounts[0]
		const addressABU524q = await ETFXPoolZ9zi3mE.transferOwnership.call(addressBoEEKxF, {from: accounts[3]});
//		const boolApkmKjZ = await ETFXPoolZ9zi3mE.transfer.call(addressAUcNPln, uintY8y53i2, {from: accounts[4]});
//		const addressocKKU3N = await ETFXPoolZ9zi3mE.owner.call({from: accounts[0]});

		await expect(ETFXPoolZ9zi3mE.transfer.call(addressAUcNPln, uintY8y53i2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolWRrB0EX = await ETFXPool.new({from: accounts[3]});
		const uintjcFhlLW = BigInt("378")
		const addressC6Z3MMI = "0x0000000000000000000000000000000000000001"
//		const uint256VPT0jDA = await ETFXPoolWRrB0EX.stake.call(uintjcFhlLW, {from: "0x0000000000000000000000000000000000000001"});
//		const addresso9EDwqO = await ETFXPoolWRrB0EX.transferOwnership.call(addressC6Z3MMI, {from: accounts[4]});

		await expect(ETFXPoolWRrB0EX.stake.call(uintjcFhlLW, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const stringe7RiNAO = "ccbv11DFs28XXY5kTtswlybMSCl3z76TdAOTBNaekGP1ybJrKH8AK8xottgd9Ff5EdTimoqy8e73alYEoJOwSBzR9z"
		const stringOuCzGEK = "bG1XVOB2Nx25nTpVdxM2Jiw"
		const uintpsgv7Ne = BigInt("185")
		const ETFXPoolrdZ9Gxx = await ETFXPool.new(stringe7RiNAO, stringOuCzGEK, uintpsgv7Ne, {from: accounts[4]});
		const addresszKBMfKY = accounts[0]
		const addresszJX7DhQ = accounts[2]
		const addressyJsQnI7 = accounts[3]
		await ETFXPoolrdZ9Gxx.renounceOwnership.call({from: accounts[1]});
		const uint256pMLcbzl = await ETFXPoolrdZ9Gxx.earned.call(addresszKBMfKY, {from: accounts[1]});
		const uint2564bHL8G = await ETFXPoolrdZ9Gxx.allowance.call(addressyJsQnI7, addresszJX7DhQ, {from: accounts[2]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolWRrB0EX = await ETFXPool.new({from: accounts[3]});
		const uintKBmbDkf = BigInt("1282")
		const addresss9X2pua = accounts[4]
		const addressdHyuvpb = "0x0000000000000000000000000000000000000000"
		const addressoMqCS1 = await ETFXPoolWRrB0EX.owner.call({from: accounts[3]});
//		const boolKjKJh9J = await ETFXPoolWRrB0EX.transfer.call(addresss9X2pua, uintKBmbDkf, {from: accounts[4]});
//		const addresso9EDwqO = await ETFXPoolWRrB0EX.transferOwnership.call(addressdHyuvpb, {from: accounts[4]});

		assert.equal(addressoMqCS1, 0x3459121FEF899C01aE87766Ba9954De75795f254)
		await expect(ETFXPoolWRrB0EX.transfer.call(addresss9X2pua, uintKBmbDkf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolMEwHqq5 = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const uint256NBEh58j = await ETFXPoolMEwHqq5.rewardPerToken.call({from: accounts[4]});
		await ETFXPoolMEwHqq5.getReward.call({from: accounts[3]});
		const stringDoJvHj = await ETFXPoolMEwHqq5.symbol.call({from: accounts[1]});
	});
})