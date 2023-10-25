const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerpq8Iso3 = await vnxManager.new({from: accounts[0]});
		const uintwEV0uVE = BigInt("1156")
		const addresslgQc4CO = accounts[3]
		const boolenGc9PK = await vnxManagerpq8Iso3.hasRole.call(addresslgQc4CO, uintwEV0uVE, {from: accounts[3]});
		await vnxManagerpq8Iso3.renounceOwnership.call({from: accounts[1]});
		await vnxManagerpq8Iso3.onlyOwner.call({from: accounts[2]});

		assert.equal(boolenGc9PK, false)
		await expect(vnxManagerpq8Iso3.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerTnVzmT1 = await vnxManager.new({from: accounts[0]});
		const boolQtClRl = await vnxManagerTnVzmT1.isAdmin.call({from: accounts[0]});
		await vnxManagerTnVzmT1.onlyOwner.call({from: accounts[2]});

		assert.equal(boolQtClRl, true)
		await expect(vnxManagerTnVzmT1.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerabGK8e = await vnxManager.new({from: accounts[4]});
		const addresslafjMHE = "0x0000000000000000000000000000000000000001"
		const addresshwb422K = accounts[3]
		const uintSQFqcnO = BigInt("2017")
		const addressRmircz = accounts[4]
		const boolHMRIUqM = await vnxManagerabGK8e.transferContractOwnership.call(addresshwb422K, addresslafjMHE, {from: accounts[4]});
		const boolESfJVcS = await vnxManagerabGK8e.isAdmin.call({from: accounts[2]});
		const boolhwjQV6z = await vnxManagerabGK8e.isAdmin.call({from: accounts[1]});
		const addressnUc8aS6 = await vnxManagerabGK8e.addBearer.call(addressRmircz, uintSQFqcnO, {from: accounts[2]});

		await expect(vnxManagerabGK8e.transferContractOwnership.call(addresshwb422K, addresslafjMHE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerlfiYtqe = await vnxManager.new({from: accounts[4]});
		const addressLc7xO3g = accounts[3]
		const addressbAYDIhe = await vnxManagerlfiYtqe.transferOwnership.call(addressLc7xO3g, {from: accounts[4]});
		await vnxManagerlfiYtqe.onlyAdmin.call({from: accounts[3]});

		await expect(vnxManagerlfiYtqe.onlyAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerq7DTTxg = await vnxManager.new({from: accounts[3]});
		const stringrj8KGN = "BczGa9u02UMTuPXM3ns"
		const uintQnDoRSy = BigInt("1295")
		const addressoFbhoT8 = accounts[1]
		const addresseoFIPyC = await vnxManagerq7DTTxg.owner.call({from: accounts[0]});
		const uint256c2CoB52 = await vnxManagerq7DTTxg.addRootRole.call(stringrj8KGN, {from: accounts[0]});
		const boolc1iyKcd = await vnxManagerq7DTTxg.hasRole.call(addressoFbhoT8, uintQnDoRSy, {from: accounts[2]});
		await vnxManagerq7DTTxg.onlyOwner.call({from: accounts[1]});

		assert.equal(addresseoFIPyC, 0xAbCD9dB568c9fD29b18aB38AD30f9A9da0F2f99E)
		assert.equal(boolc1iyKcd, false)
		assert.equal(uint256c2CoB52, BigInt("0"))
		await expect(vnxManagerq7DTTxg.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManageree4Uh2N = await vnxManager.new({from: accounts[3]});
		const uintaAXckA0 = BigInt("829")
		const addressg31N3Ge = accounts[4]
		const addressYV5mV5E = await vnxManageree4Uh2N.addBearer.call(addressg31N3Ge, uintaAXckA0, {from: accounts[4]});
		await vnxManageree4Uh2N.onlyOwner.call({from: accounts[0]});

		await expect(vnxManageree4Uh2N.addBearer.call(addressg31N3Ge, uintaAXckA0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerlfiYtqe = await vnxManager.new({from: accounts[4]});
		const addressugwY6OX = accounts[4]
		const stringUR9egC0 = "A6aJmXX8gqGFbH"
		const addresscPPOHPb = accounts[0]
		const addressk8SlXRV = accounts[0]
		const addressbAYDIhe = await vnxManagerlfiYtqe.transferOwnership.call(addressugwY6OX, {from: accounts[4]});
		const uint256Um56m0y = await vnxManagerlfiYtqe.addRootRole.call(stringUR9egC0, {from: accounts[3]});
		await vnxManagerlfiYtqe.renounceOwnership.call({from: accounts[4]});
		await vnxManagerlfiYtqe.onlyAdmin.call({from: accounts[3]});
		const boolD7bchzK = await vnxManagerlfiYtqe.transferContractOwnership.call(addressk8SlXRV, addresscPPOHPb, {from: accounts[3]});

		assert.equal(uint256Um56m0y, BigInt("0"))
		await expect(vnxManagerlfiYtqe.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerTnVzmT1 = await vnxManager.new({from: accounts[0]});
		const addressAqhgJH = accounts[2]
		const addressGMTcRFJ = accounts[1]
		const booldLqyiMU = await vnxManagerTnVzmT1.transferContractOwnership.call(addressGMTcRFJ, addressAqhgJH, {from: accounts[3]});
		const boolQtClRl = await vnxManagerTnVzmT1.isAdmin.call({from: accounts[0]});
		await vnxManagerTnVzmT1.onlyOwner.call({from: accounts[2]});

		await expect(vnxManagerTnVzmT1.transferContractOwnership.call(addressGMTcRFJ, addressAqhgJH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManageree4Uh2N = await vnxManager.new({from: accounts[3]});
		const uintOp8DRu7 = BigInt("725")
		const stringGxD2sGi = "S9evY54hQmaSwA4c33IsiBIbX7wTxkXqL93eS073PpHkR8N32mQ5mUyzT3M1N1VT1RDeHR6DNnAt"
		const uintoFMvi0X = BigInt("335")
		const addressk5WIjO = accounts[4]
		const uintlnwEjzl = BigInt("252")
		const addressRY9uX8r = accounts[1]
		const uint256R8j8tT = await vnxManageree4Uh2N.addRole.call(stringGxD2sGi, uintOp8DRu7, {from: "0x0000000000000000000000000000000000000001"});
		const addressYV5mV5E = await vnxManageree4Uh2N.addBearer.call(addressk5WIjO, uintoFMvi0X, {from: accounts[4]});
		await vnxManageree4Uh2N.onlyOwner.call({from: accounts[0]});
		const addresswMjr86C = await vnxManageree4Uh2N.addBearer.call(addressRY9uX8r, uintlnwEjzl, {from: accounts[4]});

		await expect(vnxManageree4Uh2N.addRole.call(stringGxD2sGi, uintOp8DRu7, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManageree4Uh2N = await vnxManager.new({from: accounts[3]});
		const uint256aZUtOPu = await vnxManageree4Uh2N.totalRoles.call({from: accounts[1]});
		await vnxManageree4Uh2N.onlyOwner.call({from: accounts[0]});

		assert.equal(uint256aZUtOPu, BigInt("1"))
		await expect(vnxManageree4Uh2N.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerlfiYtqe = await vnxManager.new({from: accounts[4]});
		const uintZHvppJY = BigInt("427")
		const addressYhBwLQo = accounts[2]
		const addressRrodxhf = accounts[5]
		const addressDSTqOLx = await vnxManagerlfiYtqe.removeBearer.call(addressYhBwLQo, uintZHvppJY, {from: accounts[3]});
		const address4wfd2x = await vnxManagerlfiYtqe.owner.call({from: accounts[5]});
		const addressbAYDIhe = await vnxManagerlfiYtqe.transferOwnership.call(addressRrodxhf, {from: accounts[4]});

		await expect(vnxManagerlfiYtqe.removeBearer.call(addressYhBwLQo, uintZHvppJY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManager7M4cRS = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const uintvJZNACO = BigInt("924")
		const stringMt5zdY6 = "EoVbvbCIHGmLnoGijVBPtogOPRWm6vDzCcDUJ3UeCcEDzuGIA63fWiIyQaP1nfWYMvaqJfcOrH6usYJJCbinsvPSbmmBoftFfaX"
		const uintMW7esF = BigInt("1851")
		const addressV4opsaP = "0x0000000000000000000000000000000000000001"
		const uintoUdOodT = BigInt("939")
		const addressTDpGmyg = accounts[1]
		const uint256pxetdMA = await vnxManager7M4cRS.addRole.call(stringMt5zdY6, uintvJZNACO, {from: accounts[2]});
		const bool9KdS5f = await vnxManager7M4cRS.isOwner.call({from: accounts[4]});
		const addressefVALfV = await vnxManager7M4cRS.addBearer.call(addressV4opsaP, uintMW7esF, {from: accounts[2]});
		await vnxManager7M4cRS.onlyAdmin.call({from: accounts[1]});
		const uint256ykB35mE = await vnxManager7M4cRS.totalRoles.call({from: accounts[0]});
		const boolHbh2Sb = await vnxManager7M4cRS.hasRole.call(addressTDpGmyg, uintoUdOodT, {from: accounts[5]});
	});
})