const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManageregTAMX = await vnxManager.new({from: accounts[1]});
		const stringGUrd8uS = "6rBrRemsljX"
		const uintklKILNE = BigInt("301")
		const addressUO06Qh0 = accounts[2]
		await vnxManageregTAMX.renounceOwnership.call({from: accounts[1]});
		const uint256xBbBetl = await vnxManageregTAMX.addRootRole.call(stringGUrd8uS, {from: accounts[0]});
		const boolvxmatz = await vnxManageregTAMX.hasRole.call(addressUO06Qh0, uintklKILNE, {from: accounts[3]});

		await expect(vnxManageregTAMX.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerftPD3YX = await vnxManager.new({from: accounts[1]});
		const uintMn34KLI = BigInt("271")
		const addressP4SgQLO = accounts[2]
		const uintmDfT4AF = BigInt("747")
		const stringHMj5mr5 = "eJenGiQTNQ4y9aDN9msO5jQYqEyhSLE9ilkkT6yytJ3muW2CfGO8jFh6WIVmMQnOMWFFxkPrbtgSdb"
		const boolTBUiqRy = await vnxManagerftPD3YX.isAdmin.call({from: accounts[3]});
		const uint256E249gyf = await vnxManagerftPD3YX.totalRoles.call({from: accounts[4]});
		const addressCDvgWBQ = await vnxManagerftPD3YX.addBearer.call(addressP4SgQLO, uintMn34KLI, {from: accounts[4]});
		const uint256nTMhW4M = await vnxManagerftPD3YX.addRole.call(stringHMj5mr5, uintmDfT4AF, {from: accounts[0]});

		assert.equal(boolTBUiqRy, false)
		assert.equal(uint256E249gyf, BigInt("1"))
		await expect(vnxManagerftPD3YX.addBearer.call(addressP4SgQLO, uintMn34KLI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerp3eVZzq = await vnxManager.new({from: accounts[1]});
		const uintXSdaBQ = BigInt("772")
		const stringvtRJhqz = "X7HJQT7SsmKHHSGymmfqDv3aTFFL8a4USXSbDLmkA6HDCUzDtmM8bd7K776DBc5VIdYF8LL"
		const uintIryGWjd = BigInt("1779")
		const addressgJnrpr2 = accounts[1]
		const addressooipbCI = accounts[2]
		const addressBc0SA2C = accounts[4]
		const uint256mWUZLAS = await vnxManagerp3eVZzq.addRole.call(stringvtRJhqz, uintXSdaBQ, {from: "0x0000000000000000000000000000000000000001"});
		const addressWLzGUf = await vnxManagerp3eVZzq.addBearer.call(addressgJnrpr2, uintIryGWjd, {from: accounts[2]});
		const boolAXHnPug = await vnxManagerp3eVZzq.transferContractOwnership.call(addressBc0SA2C, addressooipbCI, {from: accounts[0]});
		const uint256DKo0Bmp = await vnxManagerp3eVZzq.totalRoles.call({from: accounts[1]});

		await expect(vnxManagerp3eVZzq.addRole.call(stringvtRJhqz, uintXSdaBQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerzGSzY6U = await vnxManager.new({from: accounts[0]});
		const address0XLHGy = "0x0000000000000000000000000000000000000001"
		const stringHiaoSS = "zT6nRDqESJgElNJcLPttGhlmgNtaC4UvDMux"
		const address0Div0E = await vnxManagerzGSzY6U.transferOwnership.call(address0XLHGy, {from: "0x0000000000000000000000000000000000000001"});
		const addressSTkVhEj = await vnxManagerzGSzY6U.owner.call({from: accounts[3]});
		const uint256EecSXXP = await vnxManagerzGSzY6U.addRootRole.call(stringHiaoSS, {from: accounts[5]});

		await expect(vnxManagerzGSzY6U.transferOwnership.call(address0XLHGy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerdsVykNm = await vnxManager.new({from: accounts[1]});
		const uintRHxx6ui = BigInt("13")
		const stringMm1ulyi = "F4jd6O6Lw38w32V84FxwfIxjwZ9TrV9DPnaXvhu1MWtTJQ8tYrhCdpzxTzyecI4MEpEjtPt"
		const boolgBJCXe = await vnxManagerdsVykNm.isAdmin.call({from: accounts[5]});
		await vnxManagerdsVykNm.onlyOwner.call({from: accounts[1]});
		const uint256FC4Tgac = await vnxManagerdsVykNm.addRole.call(stringMm1ulyi, uintRHxx6ui, {from: accounts[5]});
		const boolCn0AyX9 = await vnxManagerdsVykNm.isOwner.call({from: accounts[2]});

		assert.equal(boolgBJCXe, false)
		await expect(vnxManagerdsVykNm.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerMDrRcb7 = await vnxManager.new({from: accounts[2]});
		const addressQebSTs = accounts[1]
		const uintYaCeN5h = BigInt("1343")
		const addressf71Tw2h = accounts[4]
		const addresswcRygU6 = await vnxManagerMDrRcb7.transferOwnership.call(addressQebSTs, {from: accounts[2]});
		const boolWbYPs60 = await vnxManagerMDrRcb7.hasRole.call(addressf71Tw2h, uintYaCeN5h, {from: accounts[3]});
		const uint256yDRXqUf = await vnxManagerMDrRcb7.totalRoles.call({from: accounts[4]});

		assert.equal(boolWbYPs60, false)
		assert.equal(uint256yDRXqUf, BigInt("1"))
	});

	it('test for vnxManager', async () => {
		const vnxManagerf5DGeoj = await vnxManager.new({from: accounts[0]});
		const uintwZFIacQ = BigInt("907")
		const addressa4jb3z = accounts[2]
		const addressrGYKPQs = accounts[3]
		const addressYKJbsia = accounts[3]
		const uint256XemaGz5 = await vnxManagerf5DGeoj.totalRoles.call({from: accounts[3]});
		const addressioBF78B = await vnxManagerf5DGeoj.removeBearer.call(addressa4jb3z, uintwZFIacQ, {from: accounts[3]});
		const booll6cyQpm = await vnxManagerf5DGeoj.transferContractOwnership.call(addressYKJbsia, addressrGYKPQs, {from: accounts[1]});
		await vnxManagerf5DGeoj.onlyAdmin.call({from: "0x0000000000000000000000000000000000000001"});
		await vnxManagerf5DGeoj.renounceOwnership.call({from: accounts[1]});
		const uint256BNG5Lzs = await vnxManagerf5DGeoj.totalRoles.call({from: accounts[3]});

		assert.equal(uint256XemaGz5, BigInt("1"))
		await expect(vnxManagerf5DGeoj.removeBearer.call(addressa4jb3z, uintwZFIacQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerLiMChyT = await vnxManager.new({from: accounts[3]});
		const stringIjVBeh9 = "oFmaaOgabEZfRi9iHcJ"
		const addressciXvHji = accounts[2]
		const addressbzTOhlR = accounts[0]
		const uintNn3ZjE = BigInt("1829")
		const addressjQVY34B = accounts[2]
		const uint256gRUid2L = await vnxManagerLiMChyT.addRootRole.call(stringIjVBeh9, {from: accounts[5]});
		const boolnHQe0Nr = await vnxManagerLiMChyT.isOwner.call({from: accounts[1]});
		const boolh33fc9I = await vnxManagerLiMChyT.transferContractOwnership.call(addressbzTOhlR, addressciXvHji, {from: accounts[0]});
		const boolLVIezUz = await vnxManagerLiMChyT.isAdmin.call({from: accounts[1]});
		const boolkFAvXd3 = await vnxManagerLiMChyT.hasRole.call(addressjQVY34B, uintNn3ZjE, {from: accounts[5]});

		assert.equal(boolnHQe0Nr, false)
		assert.equal(uint256gRUid2L, BigInt("0"))
		await expect(vnxManagerLiMChyT.transferContractOwnership.call(addressbzTOhlR, addressciXvHji, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerTZ7TM5i = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const addressyAAWL8K = "0x0000000000000000000000000000000000000001"
		const uintB4OiKfe = BigInt("1249")
		const stringvZrZiVz = "bdCGg4v22xkjEdCSZ62P7UlDVaSalDXKxsj8vO"
		const addressOFzeEK9 = accounts[2]
		const addresswxYxt9Z = "0x0000000000000000000000000000000000000001"
		const addressfsaNIJ6 = await vnxManagerTZ7TM5i.transferOwnership.call(addressyAAWL8K, {from: accounts[0]});
		const uint256tNlHT1L = await vnxManagerTZ7TM5i.addRole.call(stringvZrZiVz, uintB4OiKfe, {from: accounts[5]});
		const boolt3q9oVH = await vnxManagerTZ7TM5i.transferContractOwnership.call(addresswxYxt9Z, addressOFzeEK9, {from: accounts[4]});
		await vnxManagerTZ7TM5i.onlyAdmin.call({from: accounts[3]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerf5DGeoj = await vnxManager.new({from: accounts[0]});
		const uintGz49glX = BigInt("907")
		const addressRMjLpDJ = accounts[2]
		const addressigcQbnc = accounts[3]
		const addressF2NxE1z = accounts[3]
		const uint256XemaGz5 = await vnxManagerf5DGeoj.totalRoles.call({from: accounts[3]});
		const addressYnmdFA4 = await vnxManagerf5DGeoj.owner.call({from: accounts[3]});
		const addressioBF78B = await vnxManagerf5DGeoj.removeBearer.call(addressRMjLpDJ, uintGz49glX, {from: accounts[3]});
		const booll6cyQpm = await vnxManagerf5DGeoj.transferContractOwnership.call(addressF2NxE1z, addressigcQbnc, {from: accounts[1]});
		await vnxManagerf5DGeoj.onlyAdmin.call({from: "0x0000000000000000000000000000000000000001"});
		await vnxManagerf5DGeoj.renounceOwnership.call({from: accounts[1]});
		const uint256BNG5Lzs = await vnxManagerf5DGeoj.totalRoles.call({from: accounts[3]});

		assert.equal(addressYnmdFA4, 0xe3aB3da880E754452ee7516B8E2F9E66872891F2)
		assert.equal(uint256XemaGz5, BigInt("1"))
		await expect(vnxManagerf5DGeoj.removeBearer.call(addressRMjLpDJ, uintGz49glX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerxqaz9RB = await vnxManager.new({from: accounts[3]});
		const addressc0t0uNi = accounts[3]
		const addressdhgMajF = accounts[4]
		const boolcL7xA9Z = await vnxManagerxqaz9RB.transferContractOwnership.call(addressdhgMajF, addressc0t0uNi, {from: accounts[3]});
		const boolw8qVl6S = await vnxManagerxqaz9RB.isAdmin.call({from: accounts[2]});

		await expect(vnxManagerxqaz9RB.transferContractOwnership.call(addressdhgMajF, addressc0t0uNi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})