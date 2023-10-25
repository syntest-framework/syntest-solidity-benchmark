const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerug9OmiY = await vnxManager.new({from: accounts[3]});
		const uintsgGfMLY = BigInt("250")
		const stringw65PKtf = "PG1lT3FUIIvqonqhPiRlLpObbMQI"
		const uinta4cZgYX = BigInt("539")
		const stringZxdfKUl = "xQkQQoY2bYhvMcvkuFtGHB7Qpc9S7ENQtdUIUB9sTKY7teo"
		const stringuAOE1v = "hKJJEkCvGNhtmv2NfCNvB52XA9D789upmC2gPTAjThnOyDyJuyV3cP2CrXRlKikEpgoL21jmadeLTP"
		const uint256nMBc2Q9 = await vnxManagerug9OmiY.addRole.call(stringw65PKtf, uintsgGfMLY, {from: accounts[4]});
		const uint256xzsOc5 = await vnxManagerug9OmiY.addRole.call(stringZxdfKUl, uinta4cZgYX, {from: accounts[2]});
		const uint256E6hrHbt = await vnxManagerug9OmiY.addRootRole.call(stringuAOE1v, {from: accounts[3]});

		await expect(vnxManagerug9OmiY.addRole.call(stringw65PKtf, uintsgGfMLY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerfVDBQE2 = await vnxManager.new({from: accounts[3]});
		const stringQY5jJHW = "fc7IP"
		const addressT0J7xB5 = accounts[3]
		const uint256wVX6MLm = await vnxManagerfVDBQE2.addRootRole.call(stringQY5jJHW, {from: accounts[5]});
		const address7x0KR4 = await vnxManagerfVDBQE2.owner.call({from: "0x0000000000000000000000000000000000000001"});
		await vnxManagerfVDBQE2.renounceOwnership.call({from: accounts[1]});
		const addresso8c55Xm = await vnxManagerfVDBQE2.transferOwnership.call(addressT0J7xB5, {from: accounts[0]});

		assert.equal(address7x0KR4, 0xDdcec37C708Cf34bAeac444D9EdDdfF373b2f39d)
		assert.equal(uint256wVX6MLm, BigInt("0"))
		await expect(vnxManagerfVDBQE2.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerCmzTtMj = await vnxManager.new({from: accounts[3]});
		const uintURmdVZq = BigInt("846")
		const addressN5KvALL = accounts[1]
		const uint256i7ptoCJ = await vnxManagerCmzTtMj.totalRoles.call({from: "0x0000000000000000000000000000000000000001"});
		const boolAl5drQF = await vnxManagerCmzTtMj.isAdmin.call({from: accounts[2]});
		const booldqRDdmT = await vnxManagerCmzTtMj.hasRole.call(addressN5KvALL, uintURmdVZq, {from: "0x0000000000000000000000000000000000000001"});
		await vnxManagerCmzTtMj.onlyAdmin.call({from: accounts[3]});

		assert.equal(boolAl5drQF, false)
		assert.equal(booldqRDdmT, false)
		assert.equal(uint256i7ptoCJ, BigInt("1"))
		await expect(vnxManagerCmzTtMj.onlyAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerFAHWsZ8 = await vnxManager.new({from: accounts[2]});
		const addressQXcQVGh = accounts[3]
		const addressCzzsjmp = accounts[2]
		const addressNMcj69t = accounts[2]
		const addresstv2xjoQ = "0x0000000000000000000000000000000000000001"
		const uintidEPtCG = BigInt("601")
		const addressiSpMYi = accounts[0]
		const uintcWaRJeq = BigInt("935")
		const addressVdQbcUU = accounts[2]
		const boolWXr2Qc = await vnxManagerFAHWsZ8.transferContractOwnership.call(addressCzzsjmp, addressQXcQVGh, {from: accounts[3]});
		const boolJGkausq = await vnxManagerFAHWsZ8.transferContractOwnership.call(addresstv2xjoQ, addressNMcj69t, {from: "0x0000000000000000000000000000000000000001"});
		const addressr58cCt6 = await vnxManagerFAHWsZ8.addBearer.call(addressiSpMYi, uintidEPtCG, {from: accounts[4]});
		const addressfcsGAeb = await vnxManagerFAHWsZ8.addBearer.call(addressVdQbcUU, uintcWaRJeq, {from: accounts[1]});
		const addressxYbucFE = await vnxManagerFAHWsZ8.owner.call({from: accounts[3]});
		await vnxManagerFAHWsZ8.onlyAdmin.call({from: accounts[5]});

		await expect(vnxManagerFAHWsZ8.transferContractOwnership.call(addressCzzsjmp, addressQXcQVGh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerObXD97P = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZpvIjCB = BigInt("1966")
		const addressUrJFGkv = "0x0000000000000000000000000000000000000001"
		const addresssKUBwjp = accounts[2]
		const uintpfmSLri = BigInt("568")
		const addressTXvwePZ = accounts[1]
		await vnxManagerObXD97P.renounceOwnership.call({from: accounts[4]});
		const boolv1vXY2 = await vnxManagerObXD97P.hasRole.call(addressUrJFGkv, uintZpvIjCB, {from: accounts[0]});
		await vnxManagerObXD97P.onlyOwner.call({from: accounts[2]});
		const addressKZ1Wwhk = await vnxManagerObXD97P.transferOwnership.call(addresssKUBwjp, {from: accounts[2]});
		const booloNXCRZZ = await vnxManagerObXD97P.hasRole.call(addressTXvwePZ, uintpfmSLri, {from: accounts[2]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerwF30qIq = await vnxManager.new({from: accounts[4]});
		const uintFucNivo = BigInt("444")
		const addressUCj5qaW = accounts[1]
		const uint256kQr6non = await vnxManagerwF30qIq.totalRoles.call({from: "0x0000000000000000000000000000000000000001"});
		const addresstLZbAGw = await vnxManagerwF30qIq.addBearer.call(addressUCj5qaW, uintFucNivo, {from: accounts[3]});
		await vnxManagerwF30qIq.onlyOwner.call({from: accounts[2]});

		assert.equal(uint256kQr6non, BigInt("1"))
		await expect(vnxManagerwF30qIq.addBearer.call(addressUCj5qaW, uintFucNivo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerFf5vlkc = await vnxManager.new({from: accounts[1]});
		const uintixmVcES = BigInt("1133")
		const addressadIJWHo = accounts[1]
		const uint256XOTYm4J = await vnxManagerFf5vlkc.totalRoles.call({from: accounts[1]});
		const addressjIG5gfb = await vnxManagerFf5vlkc.removeBearer.call(addressadIJWHo, uintixmVcES, {from: accounts[0]});
		await vnxManagerFf5vlkc.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256XOTYm4J, BigInt("1"))
		await expect(vnxManagerFf5vlkc.removeBearer.call(addressadIJWHo, uintixmVcES, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerwF30qIq = await vnxManager.new({from: accounts[4]});
		const uintsIMBNz2 = BigInt("444")
		const addressKZ9TcxS = accounts[1]
		await vnxManagerwF30qIq.renounceOwnership.call({from: accounts[4]});
		const uint256kQr6non = await vnxManagerwF30qIq.totalRoles.call({from: "0x0000000000000000000000000000000000000001"});
		const addresstLZbAGw = await vnxManagerwF30qIq.addBearer.call(addressKZ9TcxS, uintsIMBNz2, {from: accounts[3]});

		await expect(vnxManagerwF30qIq.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerwF30qIq = await vnxManager.new({from: accounts[4]});
		const addressoVw39Kr = accounts[2]
		const uintirPVBe = BigInt("402")
		const addressXTqgXJ = accounts[1]
		const addressHUItuOo = await vnxManagerwF30qIq.transferOwnership.call(addressoVw39Kr, {from: accounts[4]});
		const addresstLZbAGw = await vnxManagerwF30qIq.addBearer.call(addressXTqgXJ, uintirPVBe, {from: accounts[3]});

		await expect(vnxManagerwF30qIq.addBearer.call(addressXTqgXJ, uintirPVBe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerwF30qIq = await vnxManager.new({from: accounts[4]});
		const addressU4NiJdO = accounts[0]
		const addressV7cIrFc = "0x0000000000000000000000000000000000000001"
		const uintwvLUPs = BigInt("402")
		const addresswz1ZbTk = accounts[1]
		const boolSbjZfuR = await vnxManagerwF30qIq.transferContractOwnership.call(addressV7cIrFc, addressU4NiJdO, {from: accounts[4]});
		await vnxManagerwF30qIq.onlyOwner.call({from: accounts[3]});
		const booleEPYkPO = await vnxManagerwF30qIq.isOwner.call({from: accounts[1]});
		const addresstLZbAGw = await vnxManagerwF30qIq.addBearer.call(addresswz1ZbTk, uintwvLUPs, {from: accounts[3]});

		await expect(vnxManagerwF30qIq.transferContractOwnership.call(addressV7cIrFc, addressU4NiJdO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})