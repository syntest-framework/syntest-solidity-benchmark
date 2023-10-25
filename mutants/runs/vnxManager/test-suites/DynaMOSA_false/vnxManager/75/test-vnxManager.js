const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerxYl6pKI = await vnxManager.new({from: accounts[3]});
		const addressl0N1uV = accounts[1]
		const addressQcx9YV = accounts[3]
		const addressCsreC4n = accounts[1]
		const boolHfwS9Qf = await vnxManagerxYl6pKI.transferContractOwnership.call(addressQcx9YV, addressl0N1uV, {from: accounts[2]});
		await vnxManagerxYl6pKI.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const addresslwRXC8S = await vnxManagerxYl6pKI.transferOwnership.call(addressCsreC4n, {from: accounts[3]});
		await vnxManagerxYl6pKI.renounceOwnership.call({from: accounts[5]});

		await expect(vnxManagerxYl6pKI.transferContractOwnership.call(addressQcx9YV, addressl0N1uV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManageruvhrSl8 = await vnxManager.new({from: accounts[4]});
		const stringNOBlLmK = "Oe9bQtHV7jVt5ZETt9GmR9nyAyfSUtBNcnmUqm7uXair7Rloed6a127ugbRsyfOs26FmH3DJ"
		const address07Y6EX = "0x0000000000000000000000000000000000000001"
		const uint256XkSwSR6 = await vnxManageruvhrSl8.addRootRole.call(stringNOBlLmK, {from: accounts[3]});
		const addressxPz5Agi = await vnxManageruvhrSl8.transferOwnership.call(address07Y6EX, {from: accounts[5]});

		assert.equal(uint256XkSwSR6, BigInt("0"))
		await expect(vnxManageruvhrSl8.transferOwnership.call(address07Y6EX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerwF9yauW = await vnxManager.new({from: accounts[2]});
		const uintQHVvOa = BigInt("19")
		const addressAUjtSfR = accounts[0]
		const uintq96N925 = BigInt("1544")
		const addressx4UEcfW = accounts[2]
		const boolRRtsxG = await vnxManagerwF9yauW.hasRole.call(addressAUjtSfR, uintQHVvOa, {from: accounts[1]});
		const booljaG75qu = await vnxManagerwF9yauW.isAdmin.call({from: accounts[2]});
		const addressOpzhXSS = await vnxManagerwF9yauW.addBearer.call(addressx4UEcfW, uintq96N925, {from: accounts[4]});
		const uint256iKiLtPR = await vnxManagerwF9yauW.totalRoles.call({from: accounts[5]});
		await vnxManagerwF9yauW.onlyOwner.call({from: accounts[4]});
		await vnxManagerwF9yauW.onlyAdmin.call({from: accounts[0]});

		assert.equal(boolRRtsxG, false)
		assert.equal(booljaG75qu, true)
		await expect(vnxManagerwF9yauW.addBearer.call(addressx4UEcfW, uintq96N925, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerIRKRRo0 = await vnxManager.new({from: accounts[4]});
		const addresseGQ3KJ = accounts[1]
		const addresslXQc28P = await vnxManagerIRKRRo0.owner.call({from: accounts[0]});
		const boolUQiuQzA = await vnxManagerIRKRRo0.isOwner.call({from: accounts[1]});
		const addressCEuNB4 = await vnxManagerIRKRRo0.transferOwnership.call(addresseGQ3KJ, {from: accounts[5]});
		await vnxManagerIRKRRo0.renounceOwnership.call({from: accounts[5]});
		const uint256zvzmGC8 = await vnxManagerIRKRRo0.totalRoles.call({from: accounts[5]});

		assert.equal(addresslXQc28P, 0x3e13C93F7052Ee43de77801bA21f93b9B6e12f0B)
		assert.equal(boolUQiuQzA, false)
		await expect(vnxManagerIRKRRo0.transferOwnership.call(addresseGQ3KJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagertuzlnrG = await vnxManager.new({from: accounts[0]});
		const addressfHe3Gly = accounts[0]
		const addressu9N4eS8 = accounts[2]
		const uintnnMHGwF = BigInt("163")
		const addressXQVeswl = accounts[0]
		const stringxmfowZN = "JIoEKQ7rzjVjciaGPLjg6LOVRSu2wOBwfjLBaGgDO2hKh16JgPMCptfaIxmBTkOXGh9y5sG19CnU6E5kPgxb"
		const uintwBjr4C7 = BigInt("1066")
		const stringDM6X8T6 = "EZh1fsb7kUP5hgSizLNI37VMtDCKirLw8lFUX8LvkkOM8bcO3K1t7VvP86mvGYW"
		const booluYcxtbY = await vnxManagertuzlnrG.transferContractOwnership.call(addressu9N4eS8, addressfHe3Gly, {from: accounts[0]});
		const uint256TKOCXU5 = await vnxManagertuzlnrG.totalRoles.call({from: accounts[2]});
		const addressMhk957 = await vnxManagertuzlnrG.addBearer.call(addressXQVeswl, uintnnMHGwF, {from: accounts[5]});
		const uint256xH88e19 = await vnxManagertuzlnrG.addRootRole.call(stringxmfowZN, {from: accounts[0]});
		const uint256CW4OUaj = await vnxManagertuzlnrG.addRole.call(stringDM6X8T6, uintwBjr4C7, {from: accounts[2]});

		await expect(vnxManagertuzlnrG.transferContractOwnership.call(addressu9N4eS8, addressfHe3Gly, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerskLtro0 = await vnxManager.new({from: accounts[3]});
		const addressvgE3cg = accounts[1]
		const uintq7qYkyj = BigInt("391")
		const addressqaGX8lf = "0x0000000000000000000000000000000000000001"
		const addresskIntsoN = await vnxManagerskLtro0.transferOwnership.call(addressvgE3cg, {from: accounts[3]});
		const uint256QEBWOTl = await vnxManagerskLtro0.totalRoles.call({from: accounts[4]});
		const addressNxADCFd = await vnxManagerskLtro0.addBearer.call(addressqaGX8lf, uintq7qYkyj, {from: accounts[1]});
		const boolEryB6Q = await vnxManagerskLtro0.isOwner.call({from: accounts[2]});
		await vnxManagerskLtro0.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256QEBWOTl, BigInt("1"))
		await expect(vnxManagerskLtro0.addBearer.call(addressqaGX8lf, uintq7qYkyj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerbXx878j = await vnxManager.new({from: accounts[4]});
		await vnxManagerbXx878j.onlyAdmin.call({from: accounts[2]});
		const boolwFSGoyI = await vnxManagerbXx878j.isOwner.call({from: accounts[0]});
		const boolSyKhcsD = await vnxManagerbXx878j.isOwner.call({from: accounts[1]});

		await expect(vnxManagerbXx878j.onlyAdmin.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerIRKRRo0 = await vnxManager.new({from: accounts[4]});
		const uintbS2Do3c = BigInt("1598")
		const stringp6fkBXE = "cKGrBaOOuy4IhGjqIOIN3lUzi838BP4yQn5FJ4WrHx"
		const addressZier6nI = accounts[1]
		const addresslXQc28P = await vnxManagerIRKRRo0.owner.call({from: accounts[0]});
		const uint256bEbC1Wy = await vnxManagerIRKRRo0.addRole.call(stringp6fkBXE, uintbS2Do3c, {from: accounts[3]});
		const boolUQiuQzA = await vnxManagerIRKRRo0.isOwner.call({from: accounts[1]});
		const addressCEuNB4 = await vnxManagerIRKRRo0.transferOwnership.call(addressZier6nI, {from: accounts[5]});
		await vnxManagerIRKRRo0.renounceOwnership.call({from: accounts[2]});
		await vnxManagerIRKRRo0.renounceOwnership.call({from: accounts[5]});
		const uint256zvzmGC8 = await vnxManagerIRKRRo0.totalRoles.call({from: accounts[5]});

		assert.equal(addresslXQc28P, 0x3e13C93F7052Ee43de77801bA21f93b9B6e12f0B)
		await expect(vnxManagerIRKRRo0.addRole.call(stringp6fkBXE, uintbS2Do3c, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerptXOsS8 = await vnxManager.new({from: accounts[5]});
		const uintDJJyMs5 = BigInt("175")
		const addressPHk84x7 = accounts[4]
		const addressKdifFdN = await vnxManagerptXOsS8.removeBearer.call(addressPHk84x7, uintDJJyMs5, {from: accounts[3]});
		const boolRNmhXc = await vnxManagerptXOsS8.isAdmin.call({from: accounts[2]});
		await vnxManagerptXOsS8.onlyOwner.call({from: accounts[4]});

		await expect(vnxManagerptXOsS8.removeBearer.call(addressPHk84x7, uintDJJyMs5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerk3miMBo = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const boolFL6bMEy = await vnxManagerk3miMBo.isAdmin.call({from: accounts[1]});
		await vnxManagerk3miMBo.onlyAdmin.call({from: accounts[2]});
		const uint256rWOMJxm = await vnxManagerk3miMBo.totalRoles.call({from: accounts[3]});
		await vnxManagerk3miMBo.onlyAdmin.call({from: accounts[1]});
		await vnxManagerk3miMBo.onlyAdmin.call({from: accounts[1]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerptXOsS8 = await vnxManager.new({from: accounts[5]});
		const uintIBf05L0 = BigInt("309")
		const addressATm5pcw = accounts[4]
		await vnxManagerptXOsS8.renounceOwnership.call({from: accounts[5]});
		await vnxManagerptXOsS8.onlyOwner.call({from: accounts[0]});
		const addressKdifFdN = await vnxManagerptXOsS8.removeBearer.call(addressATm5pcw, uintIBf05L0, {from: accounts[3]});

		await expect(vnxManagerptXOsS8.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})