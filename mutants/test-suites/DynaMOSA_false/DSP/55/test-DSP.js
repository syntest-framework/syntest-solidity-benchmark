const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const DSPhcJcoLj = await DSP.new({from: accounts[1]});
		const uintGdXeTMb = BigInt("103")
		const addressYvpDRgK = accounts[3]
		const uinteuy3mc = BigInt("1310")
		const addressu8BWIgh = accounts[3]
		const uintVdeLZPg = BigInt("188")
		const uintKrxURR = BigInt("1105")
		const addressHqLOnEP = accounts[2]
		const uintjdHnH6v = BigInt("775")
		const addressPTaNuQ = accounts[0]
//		const boolj9W81hf = await DSPhcJcoLj.burnFrombyOwner.call(addressYvpDRgK, uintGdXeTMb, {from: accounts[1]});
//		const booljCxcMEj = await DSPhcJcoLj.mint.call(addressu8BWIgh, uinteuy3mc, {from: accounts[3]});
//		const uint256w0dozeU = await DSPhcJcoLj.totalSupply.call({from: accounts[2]});
//		const boolGkzl6Y7 = await DSPhcJcoLj.lock.call(addressHqLOnEP, uintKrxURR, uintVdeLZPg, {from: accounts[1]});
//		const boollm95KYq = await DSPhcJcoLj.transfer.call(addressPTaNuQ, uintjdHnH6v, {from: accounts[1]});
//		await DSPhcJcoLj.pause.call({from: accounts[1]});

		await expect(DSPhcJcoLj.burnFrombyOwner.call(addressYvpDRgK, uintGdXeTMb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const stringVpO0MOY = "MtywyM6jdDhK1oLCso7VlWbLM5AEbj0Qg8ztQ"
		const stringNpK78e1 = "bH4aUsDRHcnDdLtE20pYx16XlJFLcS"
		const uintN5L1wzQ = BigInt("1")
		const DSPY6waTyk = await DSP.new(stringVpO0MOY, stringNpK78e1, uintN5L1wzQ, {from: accounts[1]});
		const uinta0Q12Rx = BigInt("767")
		const addresshxqKhqB = accounts[1]
		const addressiDKnYF6 = accounts[2]
		await DSPY6waTyk.unpause.call({from: accounts[4]});
		await DSPY6waTyk.onlyPauser.call({from: accounts[0]});
		const bool3aBnSf = await DSPY6waTyk.paused.call({from: accounts[3]});
		const boolmkP2sI5 = await DSPY6waTyk.transferFrom.call(addressiDKnYF6, addresshxqKhqB, uinta0Q12Rx, {from: accounts[4]});
	});

	it('test for DSP', async () => {
		const DSPleMwXDN = await DSP.new({from: accounts[2]});
		const addressFHqA9Qa = accounts[3]
		const addressrUS4KqN = "0x0000000000000000000000000000000000000001"
//		await DSPleMwXDN.whenNotPaused.call({from: accounts[3]});
//		const boolrN6UaaJ = await DSPleMwXDN.isOwner.call(addressFHqA9Qa, {from: accounts[0]});
//		const addressk12khr8 = await DSPleMwXDN.upgradeTo.call(addressrUS4KqN, {from: accounts[3]});

		await expect(DSPleMwXDN.whenNotPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGZThQfu = await DSP.new({from: accounts[1]});
		const uintNvf5dBa = BigInt("1218")
		const addressPqJs6oL = "0x0000000000000000000000000000000000000001"
		const addressfiXnGAC = accounts[5]
		const uint256A9hZQL = await DSPGZThQfu.totalSupply.call({from: accounts[1]});
//		const booldi3RYS = await DSPGZThQfu.transferFrom.call(addressfiXnGAC, addressPqJs6oL, uintNvf5dBa, {from: accounts[2]});

		assert.equal(uint256A9hZQL, BigInt("100000000000000000000000000000"))
		await expect(DSPGZThQfu.transferFrom.call(addressfiXnGAC, addressPqJs6oL, uintNvf5dBa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPHdc3TSs = await DSP.new({from: accounts[3]});
		const addressAfy3Mf8 = accounts[4]
		const uintWrIrYJr = BigInt("1307")
		const uintnK9kRP4 = BigInt("1918")
		const addressPTT2Ehg = accounts[3]
//		await DSPHdc3TSs.renouncePauser.call({from: accounts[1]});
//		await DSPHdc3TSs.onlyNewOwner.call({from: accounts[4]});
//		const boolp1UhJMx = await DSPHdc3TSs.acceptOwnership.call({from: accounts[1]});
//		const boolSiDlm1o = await DSPHdc3TSs.isPauser.call(addressAfy3Mf8, {from: accounts[0]});
//		await DSPHdc3TSs.renouncePauser.call({from: accounts[5]});
//		const boolem32o72 = await DSPHdc3TSs.transferWithLock.call(addressPTT2Ehg, uintnK9kRP4, uintWrIrYJr, {from: accounts[5]});

		await expect(DSPHdc3TSs.renouncePauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGZThQfu = await DSP.new({from: accounts[1]});
		const addressEbYl1WB = accounts[1]
		const uintjNrHPs = BigInt("835")
		const uintBlT9BX0 = BigInt("1182")
		const addressMQKTkS = accounts[0]
		const uintSAXc9aa = BigInt("1218")
		const addresszhgOTS0 = "0x0000000000000000000000000000000000000001"
		const addressk0VVPm9 = accounts[5]
		const uint256A9hZQL = await DSPGZThQfu.totalSupply.call({from: accounts[1]});
		const boolbj1LY3V = await DSPGZThQfu.isPauser.call(addressEbYl1WB, {from: accounts[3]});
//		const boolzwZjXR5 = await DSPGZThQfu.transferWithLock.call(addressMQKTkS, uintBlT9BX0, uintjNrHPs, {from: accounts[2]});
//		const booldi3RYS = await DSPGZThQfu.transferFrom.call(addressk0VVPm9, addresszhgOTS0, uintSAXc9aa, {from: accounts[2]});

		assert.equal(boolbj1LY3V, true)
		assert.equal(uint256A9hZQL, BigInt("100000000000000000000000000000"))
		await expect(DSPGZThQfu.transferWithLock.call(addressMQKTkS, uintBlT9BX0, uintjNrHPs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPMsDBJVH = await DSP.new({from: accounts[4]});
		const uintqLIzf3R = BigInt("162")
		const addressRAuqLm = accounts[2]
		const uintWiGaeoM = BigInt("56")
		const addressJDh5ZY = accounts[2]
		const addressP8W35OM = accounts[2]
		const uint5IDkiG = BigInt("245")
		const addressNLjWgtV = accounts[4]
		const addressqLO9Qkf = accounts[2]
//		const boolvt9p0dm = await DSPMsDBJVH.decreaseAllowance.call(addressRAuqLm, uintqLIzf3R, {from: accounts[1]});
//		const boolf6kGuam = await DSPMsDBJVH.transferFrom.call(addressP8W35OM, addressJDh5ZY, uintWiGaeoM, {from: accounts[1]});
//		const boolmzY013r = await DSPMsDBJVH.burnFrombyOwner.call(addressNLjWgtV, uint5IDkiG, {from: accounts[3]});
//		const uint2566OCxWY = await DSPMsDBJVH.balanceOf.call(addressqLO9Qkf, {from: accounts[3]});
//		await DSPMsDBJVH.renouncePauser.call({from: accounts[4]});

		await expect(DSPMsDBJVH.decreaseAllowance.call(addressRAuqLm, uintqLIzf3R, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGZThQfu = await DSP.new({from: accounts[1]});
		const addressdC5fFxS = accounts[1]
		const uintg1fSwLy = BigInt("835")
		const uintVuTG2zE = BigInt("1182")
		const addressLFpwqMI = accounts[0]
		const uintd07ZmN3 = BigInt("1201")
		const addresszDq6hgK = "0x0000000000000000000000000000000000000001"
		const addressfMB6KUy = accounts[5]
		const booldSsrFbA = await DSPGZThQfu.paused.call({from: accounts[3]});
		const uint256A9hZQL = await DSPGZThQfu.totalSupply.call({from: accounts[1]});
		const boolbj1LY3V = await DSPGZThQfu.isPauser.call(addressdC5fFxS, {from: accounts[3]});
//		const boolzwZjXR5 = await DSPGZThQfu.transferWithLock.call(addressLFpwqMI, uintVuTG2zE, uintg1fSwLy, {from: accounts[2]});
//		await DSPGZThQfu.pause.call({from: accounts[3]});
//		const booldi3RYS = await DSPGZThQfu.transferFrom.call(addressfMB6KUy, addresszDq6hgK, uintd07ZmN3, {from: accounts[2]});

		assert.equal(boolbj1LY3V, true)
		assert.equal(booldSsrFbA, false)
		assert.equal(uint256A9hZQL, BigInt("100000000000000000000000000000"))
		await expect(DSPGZThQfu.transferWithLock.call(addressLFpwqMI, uintVuTG2zE, uintg1fSwLy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGZThQfu = await DSP.new({from: accounts[1]});
		const addressgnUJG0t = accounts[5]
		const addressjzEdIqm = accounts[4]
		const addressuqwJolC = accounts[1]
		const uintZUHWwvT = BigInt("835")
		const uintxh0gTt8 = BigInt("1167")
		const addresslnKUHhj = accounts[0]
		const addressKfpvD1Y = accounts[0]
		const uinttRGmXIm = BigInt("1218")
		const addressm4hEUDc = "0x0000000000000000000000000000000000000001"
		const addresspYPYPOx = accounts[5]
		const uint256A9hZQL = await DSPGZThQfu.totalSupply.call({from: accounts[1]});
		const uint256dhs1ZBV = await DSPGZThQfu.allowance.call(addressjzEdIqm, addressgnUJG0t, {from: accounts[4]});
		const boolbj1LY3V = await DSPGZThQfu.isPauser.call(addressuqwJolC, {from: accounts[3]});
//		const boolzwZjXR5 = await DSPGZThQfu.transferWithLock.call(addresslnKUHhj, uintxh0gTt8, uintZUHWwvT, {from: accounts[2]});
//		const boolF63MM4q = await DSPGZThQfu.isPauser.call(addressKfpvD1Y, {from: accounts[3]});
//		const booldi3RYS = await DSPGZThQfu.transferFrom.call(addresspYPYPOx, addressm4hEUDc, uinttRGmXIm, {from: accounts[2]});

		assert.equal(boolbj1LY3V, true)
		assert.equal(uint256A9hZQL, BigInt("100000000000000000000000000000"))
		assert.equal(uint256dhs1ZBV, BigInt("0"))
		await expect(DSPGZThQfu.transferWithLock.call(addresslnKUHhj, uintxh0gTt8, uintZUHWwvT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGZThQfu = await DSP.new({from: accounts[1]});
		const uintu9zbQAj = BigInt("1902")
		const addressWFJZQpw = accounts[1]
		const addresswinRuFF = accounts[4]
		const uintK5sMUB = BigInt("1026")
		const addressS8DCqa = accounts[4]
		const addresssJUWbB0 = accounts[2]
		const uintfOk7jvl = BigInt("1218")
		const addressVh2MT4Z = "0x0000000000000000000000000000000000000001"
		const addressWyWd6o = accounts[5]
		const uint256A9hZQL = await DSPGZThQfu.totalSupply.call({from: accounts[1]});
		const uint8m53KJH = await DSPGZThQfu.decimals.call({from: accounts[1]});
//		const boolBWr1hIj = await DSPGZThQfu.transferFrom.call(addresswinRuFF, addressWFJZQpw, uintu9zbQAj, {from: accounts[2]});
//		const booleuVFdr8 = await DSPGZThQfu.transferFrom.call(addresssJUWbB0, addressS8DCqa, uintK5sMUB, {from: accounts[0]});
//		const boolRk7Iq2H = await DSPGZThQfu.acceptOwnership.call({from: accounts[2]});
//		const booldi3RYS = await DSPGZThQfu.transferFrom.call(addressWyWd6o, addressVh2MT4Z, uintfOk7jvl, {from: accounts[2]});
//		const stringt2KRUCQ = await DSPGZThQfu.symbol.call({from: accounts[0]});

		assert.equal(uint256A9hZQL, BigInt("100000000000000000000000000000"))
		assert.equal(uint8m53KJH, BigInt("18"))
		await expect(DSPGZThQfu.transferFrom.call(addresswinRuFF, addressWFJZQpw, uintu9zbQAj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGZThQfu = await DSP.new({from: accounts[1]});
		const uintgStgAUR = BigInt("1213")
		const addressQdblSIK = "0x0000000000000000000000000000000000000001"
		const addressWD3Mpdu = accounts[5]
		const uint256A9hZQL = await DSPGZThQfu.totalSupply.call({from: accounts[1]});
//		await DSPGZThQfu.f.call({from: accounts[4]});
//		const booldi3RYS = await DSPGZThQfu.transferFrom.call(addressWD3Mpdu, addressQdblSIK, uintgStgAUR, {from: accounts[2]});
//		const boolCHOMfR = await DSPGZThQfu.paused.call({from: accounts[5]});

		assert.equal(uint256A9hZQL, BigInt("100000000000000000000000000000"))
		await expect(DSPGZThQfu.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGZThQfu = await DSP.new({from: accounts[1]});
		const addresseyVSqKw = accounts[1]
		const uintVhrXIMj = BigInt("835")
		const uintJIiQSr = BigInt("1182")
		const addressadzSI2X = accounts[0]
		const uintWxUkh3f = BigInt("1218")
		const addressv9NdlM9 = "0x0000000000000000000000000000000000000002"
		const addresslZiuixf = accounts[5]
		const uint256A9hZQL = await DSPGZThQfu.totalSupply.call({from: accounts[1]});
		const uint256vnMVJ89 = await DSPGZThQfu.balanceOf.call(addresseyVSqKw, {from: accounts[0]});
//		const boolzwZjXR5 = await DSPGZThQfu.transferWithLock.call(addressadzSI2X, uintJIiQSr, uintVhrXIMj, {from: accounts[2]});
//		const booldi3RYS = await DSPGZThQfu.transferFrom.call(addresslZiuixf, addressv9NdlM9, uintWxUkh3f, {from: accounts[2]});

		assert.equal(uint256A9hZQL, BigInt("100000000000000000000000000000"))
		assert.equal(uint256vnMVJ89, BigInt("100000000000000000000000000000"))
		await expect(DSPGZThQfu.transferWithLock.call(addressadzSI2X, uintJIiQSr, uintVhrXIMj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGZThQfu = await DSP.new({from: accounts[1]});
		const addresslVwhEcl = accounts[1]
		const uintY73SE0l = BigInt("2007")
		const addressM3DSck = accounts[0]
		const uintjoLQMb = BigInt("1218")
		const addressDijJxwm = "0x0000000000000000000000000000000000000001"
		const addressa7kCYb = accounts[5]
		const uint256A9hZQL = await DSPGZThQfu.totalSupply.call({from: accounts[1]});
		const boolbj1LY3V = await DSPGZThQfu.isPauser.call(addresslVwhEcl, {from: accounts[3]});
//		const boolaqd02pp = await DSPGZThQfu.transfer.call(addressM3DSck, uintY73SE0l, {from: accounts[0]});
//		const booldi3RYS = await DSPGZThQfu.transferFrom.call(addressa7kCYb, addressDijJxwm, uintjoLQMb, {from: accounts[2]});

		assert.equal(boolbj1LY3V, true)
		assert.equal(uint256A9hZQL, BigInt("100000000000000000000000000000"))
		await expect(DSPGZThQfu.transfer.call(addressM3DSck, uintY73SE0l, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGZThQfu = await DSP.new({from: accounts[1]});
		const addressInGU8Wp = accounts[3]
		const uintXaN71A = BigInt("506")
		const addressmR665T4 = accounts[1]
		const uintnm96L2v = BigInt("1218")
		const addresstPC0lH9 = "0x0000000000000000000000000000000000000002"
		const addresskeUVXGG = accounts[5]
		const uint256A9hZQL = await DSPGZThQfu.totalSupply.call({from: accounts[1]});
		const uint256vnMVJ89 = await DSPGZThQfu.balanceOf.call(addressInGU8Wp, {from: accounts[0]});
		const booltYC2X0J = await DSPGZThQfu.increaseAllowance.call(addressmR665T4, uintXaN71A, {from: accounts[2]});
//		const booldi3RYS = await DSPGZThQfu.transferFrom.call(addresskeUVXGG, addresstPC0lH9, uintnm96L2v, {from: accounts[2]});

		assert.equal(booltYC2X0J, true)
		assert.equal(uint256A9hZQL, BigInt("100000000000000000000000000000"))
		assert.equal(uint256vnMVJ89, BigInt("0"))
		await expect(DSPGZThQfu.transferFrom.call(addresskeUVXGG, addresstPC0lH9, uintnm96L2v, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGZThQfu = await DSP.new({from: accounts[1]});
		const addresss0JRaCG = accounts[3]
		const uintpVfoHmr = BigInt("1052")
		const addressPPU27Tw = accounts[1]
		const addressHJW1pG = accounts[1]
		const uintWTZcqPy = BigInt("835")
		const uintXGGMqI = BigInt("1182")
		const addressaDDK1jB = accounts[0]
		const uint256A9hZQL = await DSPGZThQfu.totalSupply.call({from: accounts[1]});
		const boolkkMhAV = await DSPGZThQfu.isPauser.call(addresss0JRaCG, {from: accounts[2]});
		const boolXmJu4n9 = await DSPGZThQfu.approve.call(addressPPU27Tw, uintpVfoHmr, {from: accounts[2]});
		const boolbj1LY3V = await DSPGZThQfu.isPauser.call(addressHJW1pG, {from: accounts[3]});
//		const boolzwZjXR5 = await DSPGZThQfu.transferWithLock.call(addressaDDK1jB, uintXGGMqI, uintWTZcqPy, {from: accounts[2]});

		assert.equal(boolXmJu4n9, true)
		assert.equal(boolbj1LY3V, true)
		assert.equal(boolkkMhAV, false)
		assert.equal(uint256A9hZQL, BigInt("100000000000000000000000000000"))
		await expect(DSPGZThQfu.transferWithLock.call(addressaDDK1jB, uintXGGMqI, uintWTZcqPy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPUdlGatn = await DSP.new({from: accounts[3]});
		const uintS64DhBe = BigInt("1857")
		const addressNyXrt6j = accounts[3]
		const stringm9Mlp8 = await DSPUdlGatn.name.call({from: accounts[5]});
//		const boolBtg7Pl6 = await DSPUdlGatn.decreaseAllowance.call(addressNyXrt6j, uintS64DhBe, {from: accounts[5]});
//		const uint256YMhZYnb = await DSPUdlGatn.totalSupply.call({from: accounts[1]});
//		const uint8k0PhBb8 = await DSPUdlGatn.decimals.call({from: accounts[4]});

		assert.equal(stringm9Mlp8, "DSP")
		await expect(DSPUdlGatn.decreaseAllowance.call(addressNyXrt6j, uintS64DhBe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGZThQfu = await DSP.new({from: accounts[1]});
		const uintzO0bWAf = BigInt("1297")
		const uint8fkX3K = BigInt("54")
		const addressAHHxHg = accounts[2]
		const addressFB5YsVP = accounts[4]
		const addressjfKTWq0 = accounts[2]
		const uintFtIw8ym = BigInt("1218")
		const addressUSsGfYI = "0x0000000000000000000000000000000000000002"
		const addressRAyR7V = accounts[5]
		const uint256A9hZQL = await DSPGZThQfu.totalSupply.call({from: accounts[1]});
//		const boolqUL12VJ = await DSPGZThQfu.lock.call(addressAHHxHg, uint8fkX3K, uintzO0bWAf, {from: accounts[1]});
//		const uint256ak9Pa8P = await DSPGZThQfu.balanceOf.call(addressFB5YsVP, {from: "0x0000000000000000000000000000000000000001"});
//		const booliir3Of = await DSPGZThQfu.acceptOwnership.call({from: accounts[4]});
//		const uint256vnMVJ89 = await DSPGZThQfu.balanceOf.call(addressjfKTWq0, {from: accounts[0]});
//		const booldi3RYS = await DSPGZThQfu.transferFrom.call(addressRAyR7V, addressUSsGfYI, uintFtIw8ym, {from: accounts[2]});

		assert.equal(uint256A9hZQL, BigInt("100000000000000000000000000000"))
		await expect(DSPGZThQfu.lock.call(addressAHHxHg, uint8fkX3K, uintzO0bWAf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGZThQfu = await DSP.new({from: accounts[1]});
		const addressjdhRjlq = accounts[4]
		const uintD5MMypY = BigInt("1022")
		const address8B0d8e = accounts[3]
		const stringu8qVV0d = await DSPGZThQfu.symbol.call({from: accounts[4]});
		const uint256A9hZQL = await DSPGZThQfu.totalSupply.call({from: accounts[1]});
		const uint256vnMVJ89 = await DSPGZThQfu.balanceOf.call(addressjdhRjlq, {from: accounts[0]});
//		const boolkYShK35 = await DSPGZThQfu.decreaseAllowance.call(address8B0d8e, uintD5MMypY, {from: accounts[5]});

		assert.equal(stringu8qVV0d, "DSP")
		assert.equal(uint256A9hZQL, BigInt("100000000000000000000000000000"))
		assert.equal(uint256vnMVJ89, BigInt("0"))
		await expect(DSPGZThQfu.decreaseAllowance.call(address8B0d8e, uintD5MMypY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGZThQfu = await DSP.new({from: accounts[1]});
		const addressEhLtj0s = accounts[2]
		const uintWAyfTN8 = BigInt("722")
		const addressthatG5t = accounts[5]
		const uint256A9hZQL = await DSPGZThQfu.totalSupply.call({from: accounts[1]});
		const uint256vnMVJ89 = await DSPGZThQfu.balanceOf.call(addressEhLtj0s, {from: accounts[0]});
//		const boolJgeSjlt = await DSPGZThQfu.unlock.call(addressthatG5t, uintWAyfTN8, {from: accounts[1]});

		assert.equal(uint256A9hZQL, BigInt("100000000000000000000000000000"))
		assert.equal(uint256vnMVJ89, BigInt("0"))
		await expect(DSPGZThQfu.unlock.call(addressthatG5t, uintWAyfTN8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGZThQfu = await DSP.new({from: accounts[1]});
		const uintIJMcnzZ = BigInt("669")
		const addressaDQz1Mt = accounts[3]
		const addressCwzxltr = accounts[4]
		const uintOZlphx0 = BigInt("1421")
		const addressC0dzosU = "0x0000000000000000000000000000000000000001"
		const boolOXpDbY = await DSPGZThQfu.increaseAllowance.call(addressaDQz1Mt, uintIJMcnzZ, {from: accounts[5]});
//		const boolNKCzMQq = await DSPGZThQfu.unfreezeAccount.call(addressCwzxltr, {from: accounts[1]});
//		const boolsHWRs3F = await DSPGZThQfu.transfer.call(addressC0dzosU, uintOZlphx0, {from: accounts[0]});

		assert.equal(boolOXpDbY, true)
		await expect(DSPGZThQfu.unfreezeAccount.call(addressCwzxltr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjjkNfc = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintSPgZJVb = BigInt("1585")
		const addressV8YuxcT = accounts[1]
		const boolrciF8KN = await DSPjjkNfc.burnFrombyOwner.call(addressV8YuxcT, uintSPgZJVb, {from: "0x0000000000000000000000000000000000000001"});
		await DSPjjkNfc.onlyPauser.call({from: "0x0000000000000000000000000000000000000001"});
		await DSPjjkNfc.renouncePauser.call({from: accounts[2]});
		await DSPjjkNfc.onlyNewOwner.call({from: accounts[0]});
		await DSPjjkNfc.renouncePauser.call({from: accounts[3]});
	});

	it('test for DSP', async () => {
		const DSPGZThQfu = await DSP.new({from: accounts[1]});
		const addresspV2ORjm = accounts[2]
		const uintTs5ODkI = BigInt("1997")
		const addressxrgx5Ao = accounts[4]
		const address6Lni9W = accounts[3]
		const addresscvXpVtj = await DSPGZThQfu.transferOwnership.call(addresspV2ORjm, {from: accounts[1]});
		const uint256A9hZQL = await DSPGZThQfu.totalSupply.call({from: accounts[1]});
//		const boolF1UIjK = await DSPGZThQfu.burnFrombyOwner.call(addressxrgx5Ao, uintTs5ODkI, {from: accounts[2]});
//		const uint256vnMVJ89 = await DSPGZThQfu.balanceOf.call(address6Lni9W, {from: accounts[0]});

		assert.equal(uint256A9hZQL, BigInt("100000000000000000000000000000"))
		await expect(DSPGZThQfu.burnFrombyOwner.call(addressxrgx5Ao, uintTs5ODkI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGZThQfu = await DSP.new({from: accounts[1]});
		const addressVyBmctU = accounts[1]
		const uintrreWDSF = BigInt("1225")
		const addressXJq7kZI = "0x0000000000000000000000000000000000000001"
		const addressmDvoKb = accounts[5]
		const boolCCsqHyo = await DSPGZThQfu.isOwner.call(addressVyBmctU, {from: accounts[4]});
//		const booldi3RYS = await DSPGZThQfu.transferFrom.call(addressmDvoKb, addressXJq7kZI, uintrreWDSF, {from: accounts[2]});

		assert.equal(boolCCsqHyo, true)
		await expect(DSPGZThQfu.transferFrom.call(addressmDvoKb, addressXJq7kZI, uintrreWDSF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGZThQfu = await DSP.new({from: accounts[1]});
		const address6qA2sE = accounts[3]
		const uintPiw2ZIU = BigInt("631")
		const addressdrnJOP = accounts[5]
		const uintPHsqVfn = BigInt("156")
		const addressoHPzi3J = accounts[3]
		const uint256vnMVJ89 = await DSPGZThQfu.balanceOf.call(address6qA2sE, {from: accounts[0]});
//		await DSPGZThQfu.pause.call({from: accounts[1]});
//		const boololbMtpO = await DSPGZThQfu.transfer.call(addressdrnJOP, uintPiw2ZIU, {from: accounts[0]});
		await DSPGZThQfu.pause.call({from: accounts[1]});
//		const booljqAwL3W = await DSPGZThQfu.transfer.call(addressoHPzi3J, uintPHsqVfn, {from: accounts[1]});

		assert.equal(uint256vnMVJ89, BigInt("0"))
		await expect(DSPGZThQfu.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGZThQfu = await DSP.new({from: accounts[1]});
		const address7B9HdF = accounts[2]
		const addressrYjq1R = accounts[4]
		const uintyFvilk9 = BigInt("1609")
		const addressozhn99m = accounts[1]
		const uint256vnMVJ89 = await DSPGZThQfu.balanceOf.call(address7B9HdF, {from: accounts[0]});
		const addressGlLP4ye = await DSPGZThQfu.upgradeTo.call(addressrYjq1R, {from: accounts[1]});
		const boolrBFG63R = await DSPGZThQfu.approve.call(addressozhn99m, uintyFvilk9, {from: accounts[1]});

		assert.equal(boolrBFG63R, true)
		assert.equal(uint256vnMVJ89, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPGZThQfu = await DSP.new({from: accounts[1]});
		const uintGrfdfGj = BigInt("1957")
		const uintEhijQKi = BigInt("303")
		const addressce976Fm = accounts[2]
		const uint4hGT4W = BigInt("1218")
		const addressnMsmDfK = "0x0000000000000000000000000000000000000000"
		const address1bjZbq = accounts[5]
		const boolZAW7BQh = await DSPGZThQfu.transferWithLock.call(addressce976Fm, uintEhijQKi, uintGrfdfGj, {from: accounts[1]});
//		const booldi3RYS = await DSPGZThQfu.transferFrom.call(address1bjZbq, addressnMsmDfK, uint4hGT4W, {from: accounts[2]});

		assert.equal(boolZAW7BQh, true)
		await expect(DSPGZThQfu.transferFrom.call(address1bjZbq, addressnMsmDfK, uint4hGT4W, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGZThQfu = await DSP.new({from: accounts[1]});
		const addresshyFfI7P = accounts[3]
		const addresspeRN6L4 = accounts[1]
		const uinticWzabU = BigInt("1748")
		const addressSLcz2tM = accounts[1]
		const uint256vnMVJ89 = await DSPGZThQfu.balanceOf.call(addresshyFfI7P, {from: accounts[0]});
		const addressDukfmV = await DSPGZThQfu.removePauser.call(addresspeRN6L4, {from: accounts[1]});
//		const boolmyVaGeR = await DSPGZThQfu.unlock.call(addressSLcz2tM, uinticWzabU, {from: accounts[2]});
//		const uint256DZo5qoU = await DSPGZThQfu.totalSupply.call({from: accounts[0]});

		assert.equal(uint256vnMVJ89, BigInt("0"))
		await expect(DSPGZThQfu.unlock.call(addressSLcz2tM, uinticWzabU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGZThQfu = await DSP.new({from: accounts[1]});
		const addressMgkOoFn = accounts[3]
		const uintPtolhNI = BigInt("540")
		const addresszytfBtw = accounts[2]
		const uinthZkGMEt = BigInt("2043")
		const addressY3zz16r = accounts[1]
		const addressMw67a4V = accounts[1]
		const uint256A9hZQL = await DSPGZThQfu.totalSupply.call({from: accounts[1]});
		const uint256vnMVJ89 = await DSPGZThQfu.balanceOf.call(addressMgkOoFn, {from: accounts[0]});
		const boolmRNNYGI = await DSPGZThQfu.mint.call(addresszytfBtw, uintPtolhNI, {from: accounts[1]});
//		const boolE54mmUT = await DSPGZThQfu.transferFrom.call(addressMw67a4V, addressY3zz16r, uinthZkGMEt, {from: accounts[1]});

		assert.equal(boolmRNNYGI, true)
		assert.equal(uint256A9hZQL, BigInt("100000000000000000000000000000"))
		assert.equal(uint256vnMVJ89, BigInt("0"))
		await expect(DSPGZThQfu.transferFrom.call(addressMw67a4V, addressY3zz16r, uinthZkGMEt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})