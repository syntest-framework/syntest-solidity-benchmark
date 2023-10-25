const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3qkFYXji = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintqxuaqpl = BigInt("1543")
		const addressVy9JK4z = "0x0000000000000000000000000000000000000001"
		const addresslRsp0MU = accounts[3]
		const addressKpy6zVX = accounts[0]
		const addressEw3Odu = accounts[4]
		const addressnnARkI = accounts[3]
		const addressRZHba95 = accounts[2]
		const addressIGFyb43 = accounts[1]
		const uint256QSlVh6z = await Core_Fi_V3qkFYXji.totalSupply.call({from: accounts[1]});
		const boolyrGTD4m = await Core_Fi_V3qkFYXji.transferFrom.call(addresslRsp0MU, addressVy9JK4z, uintqxuaqpl, {from: accounts[3]});
		const uintyow0oX = await Core_Fi_V3qkFYXji.allowance.call(addressEw3Odu, addressKpy6zVX, {from: accounts[1]});
		const uint256gPJZOf8 = await Core_Fi_V3qkFYXji.balanceOf.call(addressnnARkI, {from: accounts[0]});
		const uintmq8quzW = await Core_Fi_V3qkFYXji.allowance.call(addressIGFyb43, addressRZHba95, {from: accounts[0]});
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3XSts7gp = await Core_Fi_V3.new({from: accounts[3]});
		const uintVKQUeoj = BigInt("1330")
		const addresstnglDKp = accounts[0]
		const addressELWReDm = accounts[2]
		const uintWOxR6H8 = BigInt("1541")
		const addressR5vXMsW = accounts[4]
		const boolIMpQIIw = await Core_Fi_V3XSts7gp.transferFrom.call(addressELWReDm, addresstnglDKp, uintVKQUeoj, {from: accounts[1]});
		const boolYASXQZ1 = await Core_Fi_V3XSts7gp.approve.call(addressR5vXMsW, uintWOxR6H8, {from: accounts[4]});

		assert.equal(boolIMpQIIw, false)
		assert.equal(boolYASXQZ1, true)
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3Cqb9Aq = await Core_Fi_V3.new({from: accounts[3]});
		const addressDDp1Ecr = accounts[0]
		const addressqL9sU40 = accounts[5]
		const addressBTVx1GQ = accounts[5]
		const uintIOoS0GG = await Core_Fi_V3Cqb9Aq.allowance.call(addressqL9sU40, addressDDp1Ecr, {from: accounts[5]});
		const uint256JPLVQAw = await Core_Fi_V3Cqb9Aq.balanceOf.call(addressBTVx1GQ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256JPLVQAw, BigInt("0"))
		assert.equal(uintIOoS0GG, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3HsksmPh = await Core_Fi_V3.new({from: accounts[3]});
		const uintNboxnKk = BigInt("1365")
		const addressjLik4iv = accounts[0]
		const uintZCmMlzW = BigInt("1247")
		const addressCfhA2Qi = accounts[3]
		const addressb4Be2Lp = accounts[0]
		const uintmxNs9Fv = BigInt("875")
		const addressRwXyxl4 = accounts[5]
		const addressIYkwpD = accounts[1]
		const addressv8Hoak4 = accounts[1]
		const addressUj5w8Bt = accounts[2]
		const addressMIovTT = accounts[4]
		const uintm9CNvG9 = BigInt("441")
		const addressX5xe2KH = "0x0000000000000000000000000000000000000001"
		const address5sNVSF = accounts[0]
		const boolSW0WdM2 = await Core_Fi_V3HsksmPh.transfer.call(addressjLik4iv, uintNboxnKk, {from: accounts[1]});
		const boolgI40eg = await Core_Fi_V3HsksmPh.transferFrom.call(addressb4Be2Lp, addressCfhA2Qi, uintZCmMlzW, {from: accounts[4]});
		const boolN7notJj = await Core_Fi_V3HsksmPh.approve.call(addressRwXyxl4, uintmxNs9Fv, {from: accounts[2]});
		const uintuRNGWU5 = await Core_Fi_V3HsksmPh.allowance.call(addressv8Hoak4, addressIYkwpD, {from: "0x0000000000000000000000000000000000000001"});
		const uintIRCtSW = await Core_Fi_V3HsksmPh.allowance.call(addressMIovTT, addressUj5w8Bt, {from: accounts[4]});
		const boolIaoIWU = await Core_Fi_V3HsksmPh.transferFrom.call(address5sNVSF, addressX5xe2KH, uintm9CNvG9, {from: accounts[1]});

		assert.equal(boolIaoIWU, false)
		assert.equal(boolN7notJj, true)
		assert.equal(boolSW0WdM2, false)
		assert.equal(boolgI40eg, false)
		assert.equal(uintIRCtSW, BigInt("0"))
		assert.equal(uintuRNGWU5, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3u65iwG = await Core_Fi_V3.new({from: accounts[3]});
		const uintUyK14H = BigInt("230")
		const addressn5ptPnc = accounts[4]
		const addressEoStU0E = accounts[3]
		const addressPK5mW2b = accounts[5]
		const uinth3Gkmx = BigInt("883")
		const addressGblEJsp = accounts[3]
		const addressskXmbMa = accounts[1]
		const uintVh4qM35 = BigInt("1540")
		const addressgLYim2A = accounts[1]
		const uintWwAH1ez = BigInt("1090")
		const addressCicIp0E = accounts[0]
		const addressljjP67S = accounts[1]
		const boolCMeAI00 = await Core_Fi_V3u65iwG.transferFrom.call(addressEoStU0E, addressn5ptPnc, uintUyK14H, {from: accounts[4]});
		const uint256daHAyiA = await Core_Fi_V3u65iwG.balanceOf.call(addressPK5mW2b, {from: accounts[2]});
		const uint256zOYYSyi = await Core_Fi_V3u65iwG.totalSupply.call({from: accounts[5]});
		const boolmlsj9nZ = await Core_Fi_V3u65iwG.transferFrom.call(addressskXmbMa, addressGblEJsp, uinth3Gkmx, {from: "0x0000000000000000000000000000000000000001"});
		const boolVjNbcR6 = await Core_Fi_V3u65iwG.approve.call(addressgLYim2A, uintVh4qM35, {from: accounts[1]});
		const booleArlYMe = await Core_Fi_V3u65iwG.transferFrom.call(addressljjP67S, addressCicIp0E, uintWwAH1ez, {from: accounts[4]});

		assert.equal(boolCMeAI00, false)
		assert.equal(boolVjNbcR6, true)
		assert.equal(booleArlYMe, false)
		assert.equal(boolmlsj9nZ, false)
		assert.equal(uint256daHAyiA, BigInt("0"))
		assert.equal(uint256zOYYSyi, BigInt("84000000000000000000000"))
	});
})