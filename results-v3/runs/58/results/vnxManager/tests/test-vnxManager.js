const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerzc86yw = await vnxManager.new({from: accounts[5]});
		const addresseMB0x76 = accounts[3]
		const addressyRnRUc = await vnxManagerzc86yw.owner.call({from: accounts[5]});
		const addressox4ren = await vnxManagerzc86yw.transferOwnership.call(addresseMB0x76, {from: accounts[3]});
		const boolfi0EUeK = await vnxManagerzc86yw.isOwner.call({from: accounts[0]});
		const boolIEVPkB = await vnxManagerzc86yw.isOwner.call({from: accounts[4]});

		assert.equal(addressyRnRUc, 0x2A193588971130Bd36C8cfFa81a332a22741a94e)
		await expect(vnxManagerzc86yw.transferOwnership.call(addresseMB0x76, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerlZIfS0u = await vnxManager.new({from: accounts[1]});
		const uintvefJA0i = BigInt("1125")
		const stringxKfvWOa = "PgsYPyBGFIiMTQR3GzeTM6yfgkyG17P78jzqtQnwzG2pNo9qIKZwEQkAVideGdwLyA8xhd2hKubB"
		const uintSOEvGDL = BigInt("280")
		const addresszTLFxyQ = accounts[4]
		const uintPdb98rt = BigInt("894")
		const stringACm6Nhe = "GlHI"
		const uintlZirj0w = BigInt("880")
		const addressJNcPZdz = accounts[4]
		const addressqozLQgI = accounts[4]
		const addressxt8LrzC = accounts[4]
		const uint256ijlw8tg = await vnxManagerlZIfS0u.addRole.call(stringxKfvWOa, uintvefJA0i, {from: accounts[2]});
		const boolfyedfe = await vnxManagerlZIfS0u.hasRole.call(addresszTLFxyQ, uintSOEvGDL, {from: accounts[4]});
		const uint256JKzO3az = await vnxManagerlZIfS0u.addRole.call(stringACm6Nhe, uintPdb98rt, {from: accounts[0]});
		await vnxManagerlZIfS0u.onlyOwner.call({from: accounts[5]});
		const boolzFVNxuv = await vnxManagerlZIfS0u.hasRole.call(addressJNcPZdz, uintlZirj0w, {from: accounts[4]});
		const boolR2xI5sw = await vnxManagerlZIfS0u.transferContractOwnership.call(addressxt8LrzC, addressqozLQgI, {from: accounts[0]});

		await expect(vnxManagerlZIfS0u.addRole.call(stringxKfvWOa, uintvefJA0i, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerWRkn9HS = await vnxManager.new({from: accounts[4]});
		const uintQ510oCN = BigInt("961")
		const addressGNUsPC2 = accounts[0]
		const uintQwyrgQp = BigInt("1695")
		const stringe4INlwE = "GKRSdhdfSRrNmgMYCKH9crYmTV39Rtjdcuh5jzNkPjxlCGOGqU6TqgxkBEHTTlOHCN4SqbnVSMqZ5"
		const addressxcC5VcB = await vnxManagerWRkn9HS.removeBearer.call(addressGNUsPC2, uintQ510oCN, {from: accounts[5]});
		await vnxManagerWRkn9HS.renounceOwnership.call({from: accounts[0]});
		await vnxManagerWRkn9HS.renounceOwnership.call({from: accounts[2]});
		const uint256M9OUwwI = await vnxManagerWRkn9HS.addRole.call(stringe4INlwE, uintQwyrgQp, {from: accounts[2]});

		await expect(vnxManagerWRkn9HS.removeBearer.call(addressGNUsPC2, uintQ510oCN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerfq5EsL = await vnxManager.new({from: accounts[1]});
		await vnxManagerfq5EsL.onlyAdmin.call({from: accounts[2]});
		const boolCXPcec0 = await vnxManagerfq5EsL.isOwner.call({from: accounts[3]});
		await vnxManagerfq5EsL.onlyAdmin.call({from: accounts[2]});
		await vnxManagerfq5EsL.renounceOwnership.call({from: accounts[0]});

		await expect(vnxManagerfq5EsL.onlyAdmin.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerkbs8aUg = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const stringUza8MIU = "Z541XaWAeyqDVulSGRVGCo"
		const uintIxkgxvh = BigInt("1022")
		const addressyePrr1n = accounts[1]
		const uint2560jqNIG = await vnxManagerkbs8aUg.addRootRole.call(stringUza8MIU, {from: accounts[1]});
		const addressAIi4fc7 = await vnxManagerkbs8aUg.removeBearer.call(addressyePrr1n, uintIxkgxvh, {from: accounts[1]});
		await vnxManagerkbs8aUg.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint2563ofDHw = await vnxManagerkbs8aUg.totalRoles.call({from: accounts[3]});
	});

	it('test for vnxManager', async () => {
		const vnxManagersjOkTz0 = await vnxManager.new({from: accounts[2]});
		const uintEnTIhQ = BigInt("1728")
		const addressTUbqjLK = accounts[3]
		const addressy3uUyih = accounts[0]
		const uint256vkdfVXN = await vnxManagersjOkTz0.totalRoles.call({from: accounts[4]});
		await vnxManagersjOkTz0.onlyAdmin.call({from: accounts[0]});
		const addressTMw5EQP = await vnxManagersjOkTz0.addBearer.call(addressTUbqjLK, uintEnTIhQ, {from: accounts[1]});
		const uint256MxR8Rgg = await vnxManagersjOkTz0.totalRoles.call({from: accounts[2]});
		const addressYRaIg5o = await vnxManagersjOkTz0.transferOwnership.call(addressy3uUyih, {from: accounts[3]});
		const addressHxw2upX = await vnxManagersjOkTz0.owner.call({from: accounts[4]});

		assert.equal(uint256vkdfVXN, BigInt("1"))
		await expect(vnxManagersjOkTz0.onlyAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerqFyzQSp = await vnxManager.new({from: accounts[4]});
		const boolNbRh2So = await vnxManagerqFyzQSp.isAdmin.call({from: accounts[2]});
		await vnxManagerqFyzQSp.onlyOwner.call({from: accounts[2]});

		assert.equal(boolNbRh2So, false)
		await expect(vnxManagerqFyzQSp.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerhnhF522 = await vnxManager.new({from: accounts[3]});
		const addressFDsWzU = accounts[0]
		const addressyZGanj = accounts[1]
		const stringho5z5Wr = "moXvwbE5SKUXerS9xErM8tetpjXcopKLeCs6L22Lk5KdLuUXwhx9jfDULwYq9C85phU2BtuAlWs5M4uWyxXuYhY51lVg"
		const booldd1WRzi = await vnxManagerhnhF522.transferContractOwnership.call(addressyZGanj, addressFDsWzU, {from: accounts[0]});
		await vnxManagerhnhF522.onlyAdmin.call({from: accounts[0]});
		const boolq3hC2st = await vnxManagerhnhF522.isOwner.call({from: accounts[0]});
		const uint256QLqI6Cn = await vnxManagerhnhF522.addRootRole.call(stringho5z5Wr, {from: accounts[0]});

		await expect(vnxManagerhnhF522.transferContractOwnership.call(addressyZGanj, addressFDsWzU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerhnhF522 = await vnxManager.new({from: accounts[3]});
		const uintRCfX80Z = BigInt("416")
		const addressztITaqJ = "0x0000000000000000000000000000000000000001"
		const addressgieCvnz = await vnxManagerhnhF522.addBearer.call(addressztITaqJ, uintRCfX80Z, {from: accounts[4]});
		const boolq3hC2st = await vnxManagerhnhF522.isOwner.call({from: accounts[0]});

		await expect(vnxManagerhnhF522.addBearer.call(addressztITaqJ, uintRCfX80Z, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerhnhF522 = await vnxManager.new({from: accounts[3]});
		const addressfjDvRaj = accounts[4]
		const addressjc0AD85 = "0x0000000000000000000000000000000000000001"
		const addressXKciM9h = accounts[0]
		const uintKNoHwQA = BigInt("2006")
		const stringJUPjsk4 = "d2w1RmwCE7SQYmfWEgqObcF7wBb9mYNoGEABimkpXPmQBNT6Eo7aDNP"
		const addresshkpBGd4 = await vnxManagerhnhF522.transferOwnership.call(addressfjDvRaj, {from: accounts[3]});
		const boolEdU0Mx = await vnxManagerhnhF522.transferContractOwnership.call(addressXKciM9h, addressjc0AD85, {from: accounts[2]});
		const boolq3hC2st = await vnxManagerhnhF522.isOwner.call({from: accounts[0]});
		const uint256wd0paOq = await vnxManagerhnhF522.addRole.call(stringJUPjsk4, uintKNoHwQA, {from: accounts[4]});

		await expect(vnxManagerhnhF522.transferContractOwnership.call(addressXKciM9h, addressjc0AD85, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerhnhF522 = await vnxManager.new({from: accounts[3]});
		const boolq3hC2st = await vnxManagerhnhF522.isOwner.call({from: accounts[0]});
		await vnxManagerhnhF522.renounceOwnership.call({from: accounts[3]});

		assert.equal(boolq3hC2st, false)
		await expect(vnxManagerhnhF522.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerhnhF522 = await vnxManager.new({from: accounts[3]});
		const addressfC4tL7J = accounts[2]
		const addressSUVm8w = accounts[1]
		const uintVRyzvb = BigInt("1211")
		const address1i2xL6 = accounts[4]
		const boolq3hC2st = await vnxManagerhnhF522.isOwner.call({from: accounts[0]});
		const boolmcJNVBM = await vnxManagerhnhF522.transferContractOwnership.call(addressSUVm8w, addressfC4tL7J, {from: accounts[3]});
		const addressxpNblf = await vnxManagerhnhF522.removeBearer.call(address1i2xL6, uintVRyzvb, {from: accounts[4]});

		assert.equal(boolq3hC2st, false)
		await expect(vnxManagerhnhF522.transferContractOwnership.call(addressSUVm8w, addressfC4tL7J, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})