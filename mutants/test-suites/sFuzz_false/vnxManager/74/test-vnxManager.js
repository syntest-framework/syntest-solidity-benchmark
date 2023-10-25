const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerlKRqrxq = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const boollyNSrAH = await vnxManagerlKRqrxq.isAdmin.call({from: "0x0000000000000000000000000000000000000001"});
		const booltwgLKUl = await vnxManagerlKRqrxq.isAdmin.call({from: accounts[1]});
		const boolEypvrSG = await vnxManagerlKRqrxq.isAdmin.call({from: accounts[0]});
		const boolrUIzGyk = await vnxManagerlKRqrxq.isOwner.call({from: accounts[3]});
		const addressjSbjZu = await vnxManagerlKRqrxq.owner.call({from: accounts[2]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerb2iuojC = await vnxManager.new({from: accounts[0]});
		const addressqQmSnUs = accounts[2]
		const stringZ0Ymvie = "3CJHYStlft1Gzqgl8nI0tE5qP3cEHmkXCDpCfnws1IbB6ZBuorP148NtkvUR6hSbw6KxzB"
		const uintQW3pxkq = BigInt("1896")
		const addressHOGtcKZ = accounts[5]
		const addressKYXjV7a = await vnxManagerb2iuojC.transferOwnership.call(addressqQmSnUs, {from: accounts[0]});
		const uint256OUCUa9H = await vnxManagerb2iuojC.addRootRole.call(stringZ0Ymvie, {from: "0x0000000000000000000000000000000000000001"});
//		await vnxManagerb2iuojC.renounceOwnership.call({from: accounts[3]});
//		const boolnTPmsSq = await vnxManagerb2iuojC.isAdmin.call({from: accounts[4]});
//		const boolvI0G7QS = await vnxManagerb2iuojC.hasRole.call(addressHOGtcKZ, uintQW3pxkq, {from: accounts[1]});

		assert.equal(uint256OUCUa9H, BigInt("0"))
		await expect(vnxManagerb2iuojC.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagergl0lRkM = await vnxManager.new({from: accounts[2]});
		const uintgvTsJTM = BigInt("370")
		const addressDbsPhdj = accounts[2]
		const uintECEAn1r = BigInt("1807")
		const addressuXjKUnw = accounts[0]
		const boollekBKP9 = await vnxManagergl0lRkM.hasRole.call(addressDbsPhdj, uintgvTsJTM, {from: accounts[3]});
		const addressiH3baSn = await vnxManagergl0lRkM.owner.call({from: accounts[3]});
		const boolEzoOhxe = await vnxManagergl0lRkM.hasRole.call(addressuXjKUnw, uintECEAn1r, {from: accounts[3]});
		const uint256Gu1vJ7P = await vnxManagergl0lRkM.totalRoles.call({from: accounts[4]});

		assert.equal(addressiH3baSn, 0x5b3bCB8EDEeaf4bF7B7AA3A98db636232a871cDB)
		assert.equal(boolEzoOhxe, false)
		assert.equal(boollekBKP9, false)
		assert.equal(uint256Gu1vJ7P, BigInt("1"))
	});

	it('test for vnxManager', async () => {
		const vnxManagerO8hP0tS = await vnxManager.new({from: accounts[5]});
		const addressfXMjFJ = accounts[3]
		const addressMmpKm1d = accounts[2]
//		const booltxcj5fL = await vnxManagerO8hP0tS.transferContractOwnership.call(addressMmpKm1d, addressfXMjFJ, {from: accounts[2]});
//		const boolaDDmHWe = await vnxManagerO8hP0tS.isAdmin.call({from: accounts[2]});

		await expect(vnxManagerO8hP0tS.transferContractOwnership.call(addressMmpKm1d, addressfXMjFJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagercgY4mVr = await vnxManager.new({from: accounts[2]});
		const uintimzFto = BigInt("213")
		const addressw8RdaK0 = accounts[5]
		const addressJDHSoYx = accounts[0]
		const stringrV61HBh = "arH8athDQRkiw18AGihnKInblLV65Wv2lhQQM"
//		const addressoTzv4yN = await vnxManagercgY4mVr.addBearer.call(addressw8RdaK0, uintimzFto, {from: accounts[4]});
//		const boolq5KBvhy = await vnxManagercgY4mVr.isOwner.call({from: accounts[2]});
//		const addressplVgdZT = await vnxManagercgY4mVr.transferOwnership.call(addressJDHSoYx, {from: accounts[3]});
//		const uint256VnQeXBr = await vnxManagercgY4mVr.addRootRole.call(stringrV61HBh, {from: accounts[0]});

		await expect(vnxManagercgY4mVr.addBearer.call(addressw8RdaK0, uintimzFto, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerWSa9Ldt = await vnxManager.new({from: accounts[0]});
		const uint256YVIXXpW = await vnxManagerWSa9Ldt.totalRoles.call({from: accounts[0]});
//		await vnxManagerWSa9Ldt.onlyAdmin.call({from: accounts[0]});
//		const boolHHn2I84 = await vnxManagerWSa9Ldt.isOwner.call({from: accounts[2]});
//		const boolg3V0MUR = await vnxManagerWSa9Ldt.isAdmin.call({from: accounts[2]});
//		const boolnl0GHf6 = await vnxManagerWSa9Ldt.isAdmin.call({from: accounts[3]});

		assert.equal(uint256YVIXXpW, BigInt("1"))
		await expect(vnxManagerWSa9Ldt.onlyAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerW6XZS9D = await vnxManager.new({from: accounts[0]});
		const uintfq29fqU = BigInt("1591")
		const addresss6qIwa = accounts[4]
		const uintSTfrrKJ = BigInt("347")
		const stringzWNcoP9 = "aFRiNJfJDIgcBhiSe9r6dFtgYkRt5iJSB8jdpfRuOnQgi3YFhMQDoP7li55xJxFqwvVMuPJFitV3gQjV5"
		const stringOHvl4r = "g4kUu65nWVcNma3QMPWmx2PJnbqsW2Fyn522RC6yhKtSxVOTxWk6hLI1HdGk6t7CT5Jp1CNgpzPPl"
		const stringmVAQ4qi = "6JegfenU41S3OG14nkRlgAGuYJMpP44t91kfZ4JS2"
		const uintTgJ7MyG = BigInt("11")
		const addressmoVQwVF = accounts[3]
		const boolt0nxH9A = await vnxManagerW6XZS9D.hasRole.call(addresss6qIwa, uintfq29fqU, {from: accounts[3]});
//		const uint256VNbjL2u = await vnxManagerW6XZS9D.addRole.call(stringzWNcoP9, uintSTfrrKJ, {from: accounts[4]});
//		const uint256XIfX7P = await vnxManagerW6XZS9D.addRootRole.call(stringOHvl4r, {from: accounts[4]});
//		const uint256UxtgwD8 = await vnxManagerW6XZS9D.addRootRole.call(stringmVAQ4qi, {from: accounts[0]});
//		const addresswafAALn = await vnxManagerW6XZS9D.addBearer.call(addressmoVQwVF, uintTgJ7MyG, {from: accounts[1]});

		assert.equal(boolt0nxH9A, false)
		await expect(vnxManagerW6XZS9D.addRole.call(stringzWNcoP9, uintSTfrrKJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerO8hP0tS = await vnxManager.new({from: accounts[5]});
		const uintDWfi2D = BigInt("2042")
		const addressUrV8DgG = accounts[1]
		const uinthNCMRC8 = BigInt("1422")
		const addresstAqLa5a = accounts[4]
		const addressFpSGDIK = accounts[3]
		const addresscE2Pfqn = accounts[2]
		const addressthyAYBu = accounts[0]
		const booltwcEDlm = await vnxManagerO8hP0tS.hasRole.call(addressUrV8DgG, uintDWfi2D, {from: accounts[2]});
//		const addressftjDmTJ = await vnxManagerO8hP0tS.removeBearer.call(addresstAqLa5a, uinthNCMRC8, {from: accounts[5]});
//		const booltxcj5fL = await vnxManagerO8hP0tS.transferContractOwnership.call(addresscE2Pfqn, addressFpSGDIK, {from: accounts[2]});
//		const addressGwpiMw = await vnxManagerO8hP0tS.transferOwnership.call(addressthyAYBu, {from: accounts[0]});

		assert.equal(booltwcEDlm, false)
		await expect(vnxManagerO8hP0tS.removeBearer.call(addresstAqLa5a, uinthNCMRC8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerO8hP0tS = await vnxManager.new({from: accounts[5]});
		const addressKM4B2bw = accounts[4]
		const addressSDQGroR = accounts[2]
//		await vnxManagerO8hP0tS.renounceOwnership.call({from: accounts[5]});
//		await vnxManagerO8hP0tS.onlyAdmin.call({from: accounts[1]});
//		const booltxcj5fL = await vnxManagerO8hP0tS.transferContractOwnership.call(addressSDQGroR, addressKM4B2bw, {from: accounts[2]});
//		const uint256kVKLpAZ = await vnxManagerO8hP0tS.totalRoles.call({from: accounts[0]});

		await expect(vnxManagerO8hP0tS.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerO8hP0tS = await vnxManager.new({from: accounts[5]});
		const addressqXfmtHq = accounts[0]
		const addressx1KAMql = accounts[1]
		const addressANGXvVi = accounts[3]
		const addressjW3vExv = accounts[2]
		const uint256lb1eeMD = await vnxManagerO8hP0tS.totalRoles.call({from: accounts[0]});
//		const boolcfGiP8q = await vnxManagerO8hP0tS.transferContractOwnership.call(addressx1KAMql, addressqXfmtHq, {from: accounts[5]});
//		const booltxcj5fL = await vnxManagerO8hP0tS.transferContractOwnership.call(addressjW3vExv, addressANGXvVi, {from: accounts[2]});
//		const addressjHtT2pT = await vnxManagerO8hP0tS.owner.call({from: accounts[3]});

		assert.equal(uint256lb1eeMD, BigInt("1"))
		await expect(vnxManagerO8hP0tS.transferContractOwnership.call(addressx1KAMql, addressqXfmtHq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})