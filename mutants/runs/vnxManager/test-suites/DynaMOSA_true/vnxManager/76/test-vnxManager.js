const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerakndxQ = await vnxManager.new({from: accounts[5]});
		const uintm0SfQ7d = BigInt("232")
		const addressHsWjcDd = accounts[4]
		const addressSEIrusG = await vnxManagerakndxQ.addBearer.call(addressHsWjcDd, uintm0SfQ7d, {from: accounts[4]});
		await vnxManagerakndxQ.onlyOwner.call({from: accounts[3]});

		await expect(vnxManagerakndxQ.addBearer.call(addressHsWjcDd, uintm0SfQ7d, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerjKN52VP = await vnxManager.new({from: accounts[5]});
		const addressM5j3R2 = accounts[3]
		const stringoXskonx = "szay8dqgOTeFF9"
		const uintJiqxKr = BigInt("92")
		const addresssXTCxFt = accounts[1]
		const addresshlNltcV = await vnxManagerjKN52VP.transferOwnership.call(addressM5j3R2, {from: accounts[1]});
		const uint256JW3vSt1 = await vnxManagerjKN52VP.addRootRole.call(stringoXskonx, {from: accounts[3]});
		const bool6VJoJa = await vnxManagerjKN52VP.hasRole.call(addresssXTCxFt, uintJiqxKr, {from: accounts[4]});
		const boolFZZGcLL = await vnxManagerjKN52VP.isAdmin.call({from: "0x0000000000000000000000000000000000000001"});
		await vnxManagerjKN52VP.renounceOwnership.call({from: accounts[5]});
		await vnxManagerjKN52VP.onlyAdmin.call({from: accounts[4]});

		await expect(vnxManagerjKN52VP.transferOwnership.call(addressM5j3R2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerQwMCwKD = await vnxManager.new({from: accounts[1]});
		const stringYdIg0E = "XAfqAEaJUJyQ0r6Ikqh8m2f64FYIxAyKVUImwMQmDajq"
		const uintD2j6zcc = BigInt("1514")
		const addressJ0r0csg = accounts[5]
		const uint256YHA7LT9 = await vnxManagerQwMCwKD.addRootRole.call(stringYdIg0E, {from: accounts[3]});
		const addressZQngHqN = await vnxManagerQwMCwKD.removeBearer.call(addressJ0r0csg, uintD2j6zcc, {from: accounts[2]});
		await vnxManagerQwMCwKD.onlyAdmin.call({from: accounts[0]});
		await vnxManagerQwMCwKD.renounceOwnership.call({from: accounts[0]});
		await vnxManagerQwMCwKD.onlyAdmin.call({from: accounts[3]});
		await vnxManagerQwMCwKD.onlyOwner.call({from: accounts[4]});

		assert.equal(uint256YHA7LT9, BigInt("0"))
		await expect(vnxManagerQwMCwKD.removeBearer.call(addressJ0r0csg, uintD2j6zcc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagermB9YjEp = await vnxManager.new({from: accounts[2]});
		const stringw4UkeLT = "kAIKeySBT1xP1LAvdFIDcs"
		await vnxManagermB9YjEp.onlyAdmin.call({from: accounts[0]});
		const uint256qhCSNKl = await vnxManagermB9YjEp.addRootRole.call(stringw4UkeLT, {from: accounts[0]});
		const uint2566O8qT2 = await vnxManagermB9YjEp.totalRoles.call({from: accounts[5]});

		await expect(vnxManagermB9YjEp.onlyAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerksWMluh = await vnxManager.new({from: accounts[3]});
		const addressir1ckDd = "0x0000000000000000000000000000000000000001"
		const addresseF6PGkR = accounts[2]
		const uintzW8KKBf = BigInt("995")
		const addressEOjrdc8 = accounts[0]
		const addressnScQxqW = accounts[3]
		const uint256hk51GpE = await vnxManagerksWMluh.totalRoles.call({from: accounts[3]});
		const boolBeZfRq = await vnxManagerksWMluh.transferContractOwnership.call(addresseF6PGkR, addressir1ckDd, {from: accounts[0]});
		const addressWSK2ulQ = await vnxManagerksWMluh.addBearer.call(addressEOjrdc8, uintzW8KKBf, {from: accounts[5]});
		const addressfe4ftk = await vnxManagerksWMluh.transferOwnership.call(addressnScQxqW, {from: accounts[1]});

		assert.equal(uint256hk51GpE, BigInt("1"))
		await expect(vnxManagerksWMluh.transferContractOwnership.call(addresseF6PGkR, addressir1ckDd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerVTlmhQj = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const stringYLRXeZ = "0xjwaTPO1BzBRYyrp3gBZxmpCKNRACJkvfg2lcwcWcpmwOH3HNDvBiI9NOYe4V1z8eom3Os"
		const addressHvxUg0C = accounts[0]
		const addressW4PriGX = accounts[2]
		const uintZqRFS2f = BigInt("212")
		const addressKecc936 = "0x0000000000000000000000000000000000000001"
		const uint256jfa5wVP = await vnxManagerVTlmhQj.addRootRole.call(stringYLRXeZ, {from: accounts[5]});
		const booluHut3ou = await vnxManagerVTlmhQj.transferContractOwnership.call(addressW4PriGX, addressHvxUg0C, {from: accounts[3]});
		const addressfZTpI7x = await vnxManagerVTlmhQj.removeBearer.call(addressKecc936, uintZqRFS2f, {from: accounts[2]});
		await vnxManagerVTlmhQj.onlyOwner.call({from: accounts[1]});
		await vnxManagerVTlmhQj.onlyOwner.call({from: accounts[4]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerijvLPxN = await vnxManager.new({from: accounts[0]});
		const uintilUhs9P = BigInt("1301")
		const stringq9B0KW5 = "1ffIznW8wPYyupwj4ZMQh1862OttXJCWkHKqpvKQgUllCdc"
		const boolDKgyxZ = await vnxManagerijvLPxN.isAdmin.call({from: accounts[0]});
		const boolI7NQD9E = await vnxManagerijvLPxN.isAdmin.call({from: accounts[0]});
		const uint256kacmTkm = await vnxManagerijvLPxN.addRole.call(stringq9B0KW5, uintilUhs9P, {from: accounts[3]});
		const boolhvsiJWI = await vnxManagerijvLPxN.isAdmin.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolDKgyxZ, true)
		assert.equal(boolI7NQD9E, true)
		await expect(vnxManagerijvLPxN.addRole.call(stringq9B0KW5, uintilUhs9P, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerQwMCwKD = await vnxManager.new({from: accounts[1]});
		const stringYdIg0E = "XAfqAEaJUJyQ0r6Ikqh8m2f64FYIxAyKVUImwMQmDajq"
		const uintwAvLWuK = BigInt("1514")
		const addressOgvzxvd = accounts[5]
		const addresswwGtr78 = accounts[4]
		const addressYtGK1rL = accounts[0]
		const addresshPTM0y = await vnxManagerQwMCwKD.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256YHA7LT9 = await vnxManagerQwMCwKD.addRootRole.call(stringYdIg0E, {from: accounts[3]});
		const addressZQngHqN = await vnxManagerQwMCwKD.removeBearer.call(addressOgvzxvd, uintwAvLWuK, {from: accounts[2]});
		await vnxManagerQwMCwKD.onlyAdmin.call({from: accounts[0]});
		const boolO3zAWV = await vnxManagerQwMCwKD.transferContractOwnership.call(addressYtGK1rL, addresswwGtr78, {from: accounts[0]});
		await vnxManagerQwMCwKD.renounceOwnership.call({from: accounts[0]});
		await vnxManagerQwMCwKD.onlyAdmin.call({from: accounts[3]});
		await vnxManagerQwMCwKD.onlyOwner.call({from: accounts[4]});

		assert.equal(addresshPTM0y, 0x61e3D30C6994fb0644eB985c9871d6d141366A06)
		assert.equal(uint256YHA7LT9, BigInt("0"))
		await expect(vnxManagerQwMCwKD.removeBearer.call(addressOgvzxvd, uintwAvLWuK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagernDjCIZs = await vnxManager.new({from: accounts[0]});
		const addressgygt5Y = accounts[4]
		const addressMFICxN = accounts[4]
		const addressilzvPa = accounts[1]
		const addressTt8TwcZ = "0x0000000000000000000000000000000000000001"
		const uintTUbWmKp = BigInt("1395")
		const addressNKJ3uOk = accounts[5]
		const addresspz6JXG6 = accounts[0]
		const boolFfxrxg7 = await vnxManagernDjCIZs.transferContractOwnership.call(addressMFICxN, addressgygt5Y, {from: accounts[0]});
		const boolCs2sz6D = await vnxManagernDjCIZs.transferContractOwnership.call(addressTt8TwcZ, addressilzvPa, {from: accounts[4]});
		await vnxManagernDjCIZs.onlyAdmin.call({from: accounts[2]});
		const booly5j26Cg = await vnxManagernDjCIZs.hasRole.call(addressNKJ3uOk, uintTUbWmKp, {from: accounts[1]});
		const addresstsvEFy7 = await vnxManagernDjCIZs.transferOwnership.call(addresspz6JXG6, {from: accounts[3]});
		await vnxManagernDjCIZs.onlyAdmin.call({from: accounts[4]});

		await expect(vnxManagernDjCIZs.transferContractOwnership.call(addressMFICxN, addressgygt5Y, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerakndxQ = await vnxManager.new({from: accounts[5]});
		const addressVUjTEhH = accounts[0]
		const uintDP4jcTw = BigInt("225")
		const addresskvkSAXC = accounts[5]
		const addressmY0nqgI = await vnxManagerakndxQ.transferOwnership.call(addressVUjTEhH, {from: accounts[5]});
		const addressSEIrusG = await vnxManagerakndxQ.addBearer.call(addresskvkSAXC, uintDP4jcTw, {from: accounts[4]});

		await expect(vnxManagerakndxQ.addBearer.call(addresskvkSAXC, uintDP4jcTw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagernDjCIZs = await vnxManager.new({from: accounts[0]});
		const addressmWgw6G4 = "0x0000000000000000000000000000000000000000"
		const addressszN7nF = accounts[2]
		const bool8o4bnJ = await vnxManagernDjCIZs.transferContractOwnership.call(addressszN7nF, addressmWgw6G4, {from: accounts[0]});
		await vnxManagernDjCIZs.renounceOwnership.call({from: accounts[3]});
		await vnxManagernDjCIZs.onlyAdmin.call({from: accounts[4]});

		await expect(vnxManagernDjCIZs.transferContractOwnership.call(addressszN7nF, addressmWgw6G4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagergShLRuC = await vnxManager.new({from: accounts[0]});
		const uintZFK5uVf = BigInt("1585")
		const addressjSqeag1 = accounts[0]
		const uintUU0BqAV = BigInt("1071")
		const addressycWBpNm = accounts[4]
		const uintzq8l7iA = BigInt("225")
		const stringNQvZt81 = "4hrtbVH5KMOPok33tj8XDiW2grlTfF6Y9WxVIYffCAre96wW6KxMbERAEniA6XiIRnlySTFcYBU61fA"
		const uint256liT1Cr1 = await vnxManagergShLRuC.totalRoles.call({from: accounts[0]});
		const boolEgv1rR1 = await vnxManagergShLRuC.hasRole.call(addressjSqeag1, uintZFK5uVf, {from: accounts[3]});
		await vnxManagergShLRuC.renounceOwnership.call({from: accounts[0]});
		const boolCOyBZBT = await vnxManagergShLRuC.isAdmin.call({from: accounts[2]});
		const addressLtHlyaY = await vnxManagergShLRuC.removeBearer.call(addressycWBpNm, uintUU0BqAV, {from: accounts[1]});
		const uint256tCEe0vR = await vnxManagergShLRuC.addRole.call(stringNQvZt81, uintzq8l7iA, {from: accounts[0]});

		assert.equal(boolEgv1rR1, false)
		assert.equal(uint256liT1Cr1, BigInt("1"))
		await expect(vnxManagergShLRuC.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})