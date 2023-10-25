const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3WZb6JEP = await Core_Fi_V3.new({from: accounts[2]});
		const uintOobxvST = BigInt("856")
		const addressLJzwkL = "0x0000000000000000000000000000000000000001"
		const addressLyVtczS = accounts[1]
		const addressQfXlVUn = accounts[2]
		const addressCt2dTPD = accounts[4]
		const booloajLYgd = await Core_Fi_V3WZb6JEP.transferFrom.call(addressLyVtczS, addressLJzwkL, uintOobxvST, {from: accounts[3]});
		const uintII59SjH = await Core_Fi_V3WZb6JEP.allowance.call(addressCt2dTPD, addressQfXlVUn, {from: accounts[3]});

		assert.equal(booloajLYgd, false)
		assert.equal(uintII59SjH, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3WHkkhId = await Core_Fi_V3.new({from: accounts[1]});
		const addressv2euCxQ = accounts[3]
		const uintUlbMizQ = BigInt("1953")
		const addressDDbFrEY = accounts[0]
		const addressfGwIYNx = accounts[4]
		const uint9mbiUf = BigInt("561")
		const addressitR7zHm = accounts[2]
		const uint256a7mtRK2 = await Core_Fi_V3WHkkhId.totalSupply.call({from: accounts[5]});
		const uint256jhbdnmC = await Core_Fi_V3WHkkhId.balanceOf.call(addressv2euCxQ, {from: accounts[2]});
		const boolRzgC00z = await Core_Fi_V3WHkkhId.transferFrom.call(addressfGwIYNx, addressDDbFrEY, uintUlbMizQ, {from: accounts[0]});
		const uint256AMNOAO = await Core_Fi_V3WHkkhId.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolJthjmzm = await Core_Fi_V3WHkkhId.approve.call(addressitR7zHm, uint9mbiUf, {from: accounts[4]});

		assert.equal(boolJthjmzm, true)
		assert.equal(boolRzgC00z, false)
		assert.equal(uint256AMNOAO, BigInt("84000000000000000000000"))
		assert.equal(uint256a7mtRK2, BigInt("84000000000000000000000"))
		assert.equal(uint256jhbdnmC, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3iqiZ2gF = await Core_Fi_V3.new({from: accounts[0]});
		const uint0WMBMb = BigInt("364")
		const addressP3yTPg7 = accounts[0]
		const uintc00pKgc = BigInt("583")
		const addressPghQzX = accounts[0]
		const addressC8Sbnih = accounts[2]
		const uintyXDBNgn = BigInt("1179")
		const addressEpEqbUB = accounts[4]
		const addressBBXeTTI = accounts[2]
		const uintMnipwNe = BigInt("1792")
		const addressk7jwvcX = accounts[2]
		const addressjtpVKpH = accounts[1]
		const uintENUDma5 = BigInt("1422")
		const addressj2QrRJF = accounts[2]
		const uintDWql8MO = BigInt("1190")
		const addressB8YQv3 = accounts[0]
		const addressVv5kGq8 = accounts[4]
		const boolUF2DDhU = await Core_Fi_V3iqiZ2gF.approve.call(addressP3yTPg7, uint0WMBMb, {from: accounts[0]});
		const boolZO97MA = await Core_Fi_V3iqiZ2gF.transferFrom.call(addressC8Sbnih, addressPghQzX, uintc00pKgc, {from: accounts[3]});
		const boolZMTF8s8 = await Core_Fi_V3iqiZ2gF.transferFrom.call(addressBBXeTTI, addressEpEqbUB, uintyXDBNgn, {from: "0x0000000000000000000000000000000000000001"});
		const boolxdUL3kd = await Core_Fi_V3iqiZ2gF.transferFrom.call(addressjtpVKpH, addressk7jwvcX, uintMnipwNe, {from: accounts[1]});
		const boolqTYRC3V = await Core_Fi_V3iqiZ2gF.transfer.call(addressj2QrRJF, uintENUDma5, {from: accounts[1]});
		const boolOyuwBVU = await Core_Fi_V3iqiZ2gF.transferFrom.call(addressVv5kGq8, addressB8YQv3, uintDWql8MO, {from: accounts[0]});

		assert.equal(boolOyuwBVU, false)
		assert.equal(boolUF2DDhU, true)
		assert.equal(boolZMTF8s8, false)
		assert.equal(boolZO97MA, false)
		assert.equal(boolqTYRC3V, false)
		assert.equal(boolxdUL3kd, false)
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3gTkNwlz = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintjxUFgF6 = BigInt("760")
		const addressXDiEzCE = accounts[0]
		const addressRNizbl3 = accounts[3]
		const addressIM5552p = accounts[4]
		const addressrsT3tr = "0x0000000000000000000000000000000000000001"
		const uintxuL7AkI = BigInt("692")
		const addressglWVXc9 = accounts[3]
		const boolBMXuwsH = await Core_Fi_V3gTkNwlz.transferFrom.call(addressRNizbl3, addressXDiEzCE, uintjxUFgF6, {from: accounts[2]});
		const uintvD3LyKI = await Core_Fi_V3gTkNwlz.allowance.call(addressrsT3tr, addressIM5552p, {from: "0x0000000000000000000000000000000000000001"});
		const boolYE5r44T = await Core_Fi_V3gTkNwlz.transfer.call(addressglWVXc9, uintxuL7AkI, {from: accounts[3]});
		const uint256lRYJZle = await Core_Fi_V3gTkNwlz.totalSupply.call({from: accounts[2]});
	});
})