const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenbs9ZMxZ = await ThriftToken.new({from: accounts[2]});
		const uintk2Ota04 = BigInt("1465")
		const addressuicuU14 = accounts[4]
		const uintPb04m2o = BigInt("209")
		const addressxt5kS0O = accounts[3]
		const addressZImNavr = accounts[5]
		const uintJ7VEe9V = BigInt("1739")
		const addressYZlzJh6 = accounts[3]
		const boolr4I221D = await ThriftTokenbs9ZMxZ.approve.call(addressuicuU14, uintk2Ota04, {from: accounts[1]});
		const boolbk9bH0v = await ThriftTokenbs9ZMxZ.transferFrom.call(addressZImNavr, addressxt5kS0O, uintPb04m2o, {from: accounts[4]});
		const boolpKcP3eB = await ThriftTokenbs9ZMxZ.decreaseApproval.call(addressYZlzJh6, uintJ7VEe9V, {from: accounts[3]});

		assert.equal(boolr4I221D, true)
		await expect(ThriftTokenbs9ZMxZ.transferFrom.call(addressZImNavr, addressxt5kS0O, uintPb04m2o, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenpolgVFY = await ThriftToken.new({from: accounts[0]});
		const uintajgMqlA = BigInt("602")
		const addressrhkzZA = accounts[1]
		const uintgBr352U = BigInt("326")
		const addressk4ZEfD = accounts[4]
		const addressb756B5z = accounts[0]
		const addressz0d5O1Q = accounts[5]
		const uintstGurs = BigInt("844")
		const addressX9WvhAL = accounts[0]
		const address73erx9 = accounts[0]
		const boolPwG1NmI = await ThriftTokenpolgVFY.approve.call(addressrhkzZA, uintajgMqlA, {from: accounts[0]});
		const boold48aaRu = await ThriftTokenpolgVFY.transfer.call(addressk4ZEfD, uintgBr352U, {from: accounts[3]});
		const uint256AY0qz1C = await ThriftTokenpolgVFY.balanceOf.call(addressb756B5z, {from: accounts[3]});
		const uint256CnDZs9U = await ThriftTokenpolgVFY.transferableTokens.call(addressz0d5O1Q, {from: accounts[3]});
		const boolO4IHQFN = await ThriftTokenpolgVFY.transferFrom.call(address73erx9, addressX9WvhAL, uintstGurs, {from: accounts[0]});

		assert.equal(boolPwG1NmI, true)
		await expect(ThriftTokenpolgVFY.transfer.call(addressk4ZEfD, uintgBr352U, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenh6dnkyO = await ThriftToken.new({from: accounts[3]});
		const addressfS0vCx = accounts[0]
		const uintMN1zEpN = BigInt("1276")
		const addressby9oq2 = accounts[2]
		const addressAVbZN6c = accounts[4]
		const addressPBzdWTj = accounts[4]
		const uintRhIi16 = BigInt("718")
		const addressGTgmMMN = accounts[0]
		const addressolFU27N = await ThriftTokenh6dnkyO.transferOwnership.call(addressfS0vCx, {from: accounts[4]});
		const booluQ8eUmX = await ThriftTokenh6dnkyO.decreaseApproval.call(addressby9oq2, uintMN1zEpN, {from: accounts[5]});
		const uint256BVssd9i = await ThriftTokenh6dnkyO.allowance.call(addressPBzdWTj, addressAVbZN6c, {from: accounts[4]});
		const boolDe3DdXM = await ThriftTokenh6dnkyO.decreaseApproval.call(addressGTgmMMN, uintRhIi16, {from: accounts[1]});

		await expect(ThriftTokenh6dnkyO.transferOwnership.call(addressfS0vCx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenl3xuhoV = await ThriftToken.new({from: accounts[2]});
		const addressdIULK0F = accounts[2]
		const uintR1Nuhjr = BigInt("986")
		const addressagoPf5R = accounts[3]
		const uintGCzjBIj = BigInt("503")
		const addressfu0nCIC = accounts[0]
		const uint256SJHeZdc = await ThriftTokenl3xuhoV.balanceOf.call(addressdIULK0F, {from: accounts[2]});
		const boolPo5oqAl = await ThriftTokenl3xuhoV.increaseApproval.call(addressagoPf5R, uintR1Nuhjr, {from: accounts[4]});
		const boolvqBJTZg = await ThriftTokenl3xuhoV.increaseApproval.call(addressfu0nCIC, uintGCzjBIj, {from: accounts[2]});

		assert.equal(boolPo5oqAl, true)
		assert.equal(boolvqBJTZg, true)
		assert.equal(uint256SJHeZdc, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenJbS1MAl = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgYFB3KY = BigInt("1460")
		const addressjkxYWjC = accounts[3]
		const addresshpnNuE4 = accounts[4]
		const uintMVcGCYQ = BigInt("1293")
		const addressQceyIUP = accounts[2]
		const boolVPUJn12 = await ThriftTokenJbS1MAl.increaseApproval.call(addressjkxYWjC, uintgYFB3KY, {from: accounts[5]});
		const uint256SNtgt4H = await ThriftTokenJbS1MAl.balanceOf.call(addresshpnNuE4, {from: accounts[2]});
		const boolpAfSzio = await ThriftTokenJbS1MAl.decreaseApproval.call(addressQceyIUP, uintMVcGCYQ, {from: accounts[0]});
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenbN4CFQN = await ThriftToken.new({from: accounts[0]});
		const addressCvTfZAN = accounts[5]
		const addressvaRubW5 = accounts[3]
		const addresswsKJgji = accounts[3]
		const addressmDAbDYV = accounts[1]
		const uint256jopUfSB = await ThriftTokenbN4CFQN.balanceOf.call(addressCvTfZAN, {from: accounts[5]});
		const uint256SPx7uZR = await ThriftTokenbN4CFQN.transferableTokens.call(addressvaRubW5, {from: accounts[0]});
		const uint256vGSGVtm = await ThriftTokenbN4CFQN.allowance.call(addressmDAbDYV, addresswsKJgji, {from: accounts[4]});

		assert.equal(uint256SPx7uZR, BigInt("0"))
		assert.equal(uint256jopUfSB, BigInt("0"))
		assert.equal(uint256vGSGVtm, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenbN4CFQN = await ThriftToken.new({from: accounts[0]});
		const addressTM9byxb = accounts[4]
		const uintTCikEQ3 = BigInt("1955")
		const addressRWmWuP = accounts[4]
		const addressgVPbgem = accounts[3]
		const uint256jopUfSB = await ThriftTokenbN4CFQN.balanceOf.call(addressTM9byxb, {from: accounts[5]});
		const boolywEd0Uk = await ThriftTokenbN4CFQN.decreaseApproval.call(addressRWmWuP, uintTCikEQ3, {from: accounts[5]});
		const uint256SPx7uZR = await ThriftTokenbN4CFQN.transferableTokens.call(addressgVPbgem, {from: accounts[0]});

		assert.equal(boolywEd0Uk, true)
		assert.equal(uint256SPx7uZR, BigInt("0"))
		assert.equal(uint256jopUfSB, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenbN4CFQN = await ThriftToken.new({from: accounts[0]});
		const addresss9uXis = accounts[4]
		const addressBG8hqf3 = accounts[5]
		const addressvEmUbvU = accounts[0]
		const uint256ymNP06e = await ThriftTokenbN4CFQN.balanceOf.call(addresss9uXis, {from: accounts[0]});
		const uint256jopUfSB = await ThriftTokenbN4CFQN.balanceOf.call(addressBG8hqf3, {from: accounts[5]});
		const addressMDQ9bx8 = await ThriftTokenbN4CFQN.transferOwnership.call(addressvEmUbvU, {from: accounts[0]});

		assert.equal(uint256jopUfSB, BigInt("0"))
		assert.equal(uint256ymNP06e, BigInt("0"))
		await expect(ThriftTokenbN4CFQN.transferOwnership.call(addressvEmUbvU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenbN4CFQN = await ThriftToken.new({from: accounts[0]});
		const addressCzGEDS = accounts[5]
		const addressgw7fGRt = accounts[3]
		const uint256jopUfSB = await ThriftTokenbN4CFQN.balanceOf.call(addressCzGEDS, {from: accounts[5]});
		const addressVGTa7kI = await ThriftTokenbN4CFQN.transferOwnership.call(addressgw7fGRt, {from: accounts[0]});

		assert.equal(uint256jopUfSB, BigInt("0"))
	});
})