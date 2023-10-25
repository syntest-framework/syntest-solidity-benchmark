const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintLUYL7nC = BigInt("594")
		const Cover_ZapIn_General_V1XZF3gx = await Cover_ZapIn_General_V1.new(uintLUYL7nC, {from: accounts[3]});
		const byteqzIfUmv = "0x051c1501130f181a0116030b1d0c17031317"
		const addressC79pJx3 = accounts[5]
		const addressbQgSyB = accounts[4]
		const uintayQt5Nk = BigInt("858")
		const addressG6NznYO = accounts[2]
		const addressdc3DV0U = accounts[4]
		const addresssX9GcxV = accounts[4]
		const addressaPjzaI9 = accounts[5]
		await Cover_ZapIn_General_V1XZF3gx.stopInEmergency.call({from: "0x0000000000000000000000000000000000000001"});
		const addressyPBt8rS = await Cover_ZapIn_General_V1XZF3gx.owner.call({from: accounts[2]});
		const addressijYO9LP = await Cover_ZapIn_General_V1XZF3gx.owner.call({from: accounts[5]});
		const 
NLC0cLl = await Cover_ZapIn_General_V1XZF3gx.ZapIn.call(addressaPjzaI9, addresssX9GcxV, addressdc3DV0U, addressG6NznYO, uintayQt5Nk, addressbQgSyB, addressC79pJx3, byteqzIfUmv, {from: accounts[3]});
		await Cover_ZapIn_General_V1XZF3gx.stopInEmergency.call({from: accounts[5]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintEAfGnVH = BigInt("1794")
		const Cover_ZapIn_General_V1rOoAZ8L = await Cover_ZapIn_General_V1.new(uintEAfGnVH, {from: accounts[3]});
		const bytevs4yfLV = "0x151e1507041e08091808130f1611"
		const addressLUaLjOV = accounts[4]
		const addressV7RvpcP = accounts[5]
		const uintoHjDssm = BigInt("1708")
		const addresslxZjqKU = accounts[3]
		const addressxe38MXH = accounts[4]
		const addressQsfKOXS = accounts[2]
		const addressuVjfcuA = accounts[1]
		const 
XB6rL4t = await Cover_ZapIn_General_V1rOoAZ8L.ZapIn.call(addressuVjfcuA, addressQsfKOXS, addressxe38MXH, addresslxZjqKU, uintoHjDssm, addressV7RvpcP, addressLUaLjOV, bytevs4yfLV, {from: "0x0000000000000000000000000000000000000001"});
		const boolP7w4rDc = await Cover_ZapIn_General_V1rOoAZ8L.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1rOoAZ8L.nonReentrant.call({from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintsWp1vdo = BigInt("1173")
		const Cover_ZapIn_General_V1F9OyQZn = await Cover_ZapIn_General_V1.new(uintsWp1vdo, {from: accounts[5]});
		const addressxt9zNS2 = "0x0000000000000000000000000000000000000001"
		const uintvjDyBxF = BigInt("490")
		const addresszC1kuy1 = await Cover_ZapIn_General_V1F9OyQZn.transferOwnership.call(addressxt9zNS2, {from: accounts[5]});
		const uint16OBRUlVr = await Cover_ZapIn_General_V1F9OyQZn.set_new_goodwill.call(uintvjDyBxF, {from: accounts[1]});
		await Cover_ZapIn_General_V1F9OyQZn.toggleContractActive.call({from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintvwA4Ez2 = BigInt("1222")
		const Cover_ZapIn_General_V1gLBAr4q = await Cover_ZapIn_General_V1.new(uintvwA4Ez2, {from: accounts[0]});
		const addressXrK1JdO = accounts[0]
		const addressJwLhKKu = "0x0000000000000000000000000000000000000001"
		await Cover_ZapIn_General_V1gLBAr4q.renounceOwnership.call({from: accounts[0]});
		const addressN8YILx7 = await Cover_ZapIn_General_V1gLBAr4q.transferOwnership.call(addressXrK1JdO, {from: accounts[1]});
		const 
JRA1cs = await Cover_ZapIn_General_V1gLBAr4q._getCoverDetails.call(addressJwLhKKu, {from: accounts[3]});
		await Cover_ZapIn_General_V1gLBAr4q.stopInEmergency.call({from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintHUGRphj = BigInt("182")
		const Cover_ZapIn_General_V1BNvx3CX = await Cover_ZapIn_General_V1.new(uintHUGRphj, {from: "0x0000000000000000000000000000000000000001"});
		const bytekNH7LGo = "0x1003031e1d021208110d1a1202130f0d121c1a0c"
		const addressYaL5AOV = accounts[1]
		const addresseSfkz7p = accounts[4]
		const uintdGyjRTX = BigInt("50")
		const addressrOIOvWP = accounts[5]
		const addressLoplkjC = accounts[1]
		const addressiajzyxU = accounts[4]
		const addressCdHQpXd = accounts[1]
		const addressEb7h4Bd = accounts[1]
		const addressOsBFjY = accounts[2]
		const uintovkeYrA = BigInt("1005")
		const addressSDI7jR = accounts[3]
		const boolZKc0nyK = await Cover_ZapIn_General_V1BNvx3CX.isOwner.call({from: accounts[4]});
		const 
HBDdZqu = await Cover_ZapIn_General_V1BNvx3CX.ZapIn.call(addressCdHQpXd, addressiajzyxU, addressLoplkjC, addressrOIOvWP, uintdGyjRTX, addresseSfkz7p, addressYaL5AOV, bytekNH7LGo, {from: accounts[4]});
		const boolriH5IM = await Cover_ZapIn_General_V1BNvx3CX.isOwner.call({from: accounts[3]});
		const 
W2vI96e = await Cover_ZapIn_General_V1BNvx3CX._enterPosition.call(addressSDI7jR, uintovkeYrA, addressOsBFjY, addressEb7h4Bd, {from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintgh5tgfi = BigInt("1794")
		const Cover_ZapIn_General_V1rOoAZ8L = await Cover_ZapIn_General_V1.new(uintgh5tgfi, {from: accounts[3]});
		const uintKTOgWpz = BigInt("1078")
		const addresshMjaETg = accounts[0]
		await Cover_ZapIn_General_V1rOoAZ8L.toggleContractActive.call({from: accounts[3]});
		await Cover_ZapIn_General_V1rOoAZ8L.nonReentrant.call({from: accounts[4]});
		await Cover_ZapIn_General_V1rOoAZ8L._enterCover.call(addresshMjaETg, uintKTOgWpz, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintA5fbPd = BigInt("1794")
		const Cover_ZapIn_General_V1rOoAZ8L = await Cover_ZapIn_General_V1.new(uintA5fbPd, {from: accounts[3]});
		const uintAW1pZSt = BigInt("1458")
		const uint16XhgyU6 = await Cover_ZapIn_General_V1rOoAZ8L.set_new_goodwill.call(uintAW1pZSt, {from: accounts[3]});
		await Cover_ZapIn_General_V1rOoAZ8L.nonReentrant.call({from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintMuYu6As = BigInt("1794")
		const Cover_ZapIn_General_V1rOoAZ8L = await Cover_ZapIn_General_V1.new(uintMuYu6As, {from: accounts[3]});
		const addressjKMVqLz = await Cover_ZapIn_General_V1rOoAZ8L.owner.call({from: accounts[1]});
		await Cover_ZapIn_General_V1rOoAZ8L.nonReentrant.call({from: accounts[4]});
		await Cover_ZapIn_General_V1rOoAZ8L.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintdAyjpGb = BigInt("1794")
		const Cover_ZapIn_General_V1rOoAZ8L = await Cover_ZapIn_General_V1.new(uintdAyjpGb, {from: accounts[3]});
		const addressH9Ttjxq = accounts[4]
		const addresszbvQLZd = await Cover_ZapIn_General_V1rOoAZ8L.owner.call({from: accounts[1]});
		const addressynTKpY = await Cover_ZapIn_General_V1rOoAZ8L.inCaseTokengetsStuck.call(addressH9Ttjxq, {from: accounts[3]});
		await Cover_ZapIn_General_V1rOoAZ8L.nonReentrant.call({from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintcgnaM2H = BigInt("1794")
		const Cover_ZapIn_General_V1rOoAZ8L = await Cover_ZapIn_General_V1.new(uintcgnaM2H, {from: accounts[3]});
		await Cover_ZapIn_General_V1rOoAZ8L.withdraw.call({from: accounts[3]});
		await Cover_ZapIn_General_V1rOoAZ8L.nonReentrant.call({from: accounts[4]});
	});
})