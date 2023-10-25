const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contract07Nqoa = await VBZRXWrapper_alt.new({from: accounts[1]});
		const accountgSEB6ot = "0x0000000000000000000000000000000000000001"
		const valueepRMrWE = BigInt("345")
		const spenderdWbuTg = accounts[0]
		const accountBp0v6gj = "0x0000000000000000000000000000000000000001"
		const valuejQkeZtA = BigInt("1616")
		const spenderqxgQUr1 = accounts[2]
		const nullfrLBAwI = await contract07Nqoa.claim.call({from: accounts[0]});
		const nullzMhdtyy = await contract07Nqoa.claimable.call(accountgSEB6ot, {from: accounts[2]});
		const nullkrePZn = await contract07Nqoa.approve.call(spenderdWbuTg, valueepRMrWE, {from: accounts[2]});
		const nullpQXBAVg = await contract07Nqoa.claimable.call(accountBp0v6gj, {from: accounts[2]});
		const nullnmIQ62 = await contract07Nqoa.approve.call(spenderqxgQUr1, valuejQkeZtA, {from: accounts[1]});
		const nullT8UQhm6 = await contract07Nqoa.claim.call({from: accounts[2]});

		assert.equal(nullT8UQhm6, 0)
		assert.equal(nullfrLBAwI, 0)
		assert.equal(nullkrePZn, true)
		assert.equal(nullnmIQ62, true)
		assert.equal(nullpQXBAVg, 0)
		assert.equal(nullzMhdtyy, 0)
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractnyUBrmM = await VBZRXWrapper_alt.new({from: accounts[5]});
		const valuexucytIc = BigInt("1904")
		const dstukNoM6D = accounts[2]
		const srccFGCZxd = accounts[4]
		const toggleK2UUMSA = false
		const addrt9WB3NL = accounts[1]
		const accountURP0CxP = "0x0000000000000000000000000000000000000001"
		const nullvw5mlJs = await contractnyUBrmM.transferFrom.call(srccFGCZxd, dstukNoM6D, valuexucytIc, {from: accounts[4]});
		await contractnyUBrmM.setBridge.call(addrt9WB3NL, toggleK2UUMSA, {from: accounts[1]});
		const nullmCaoRHS = await contractnyUBrmM.claimable.call(accountURP0CxP, {from: accounts[3]});

		await expect(contractnyUBrmM.transferFrom.call(srccFGCZxd, dstukNoM6D, valuexucytIc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractyUcubQL = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const toggleF6W35Jl = true
		const addrGNO0WfV = accounts[2]
		const valueWOQJ3lk = BigInt("1757")
		const valueFEweu6Q = BigInt("228")
		const spenderqCBnHM = accounts[1]
		await contractyUcubQL.setBridge.call(addrGNO0WfV, toggleF6W35Jl, {from: accounts[5]});
		await contractyUcubQL.withdraw.call(valueWOQJ3lk, {from: accounts[5]});
		const nullh25hJ1 = await contractyUcubQL.approve.call(spenderqCBnHM, valueFEweu6Q, {from: accounts[0]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contract4bx4kb = await VBZRXWrapper_alt.new({from: accounts[0]});
		const valuecpNiQn = BigInt("1745")
		const valuejq2AHW = BigInt("1529")
		const spenderTC2Lkt = accounts[0]
		const valueubJOwD = BigInt("467")
		const valueNXeFzYF = BigInt("1733")
		const dstidWDjv = accounts[0]
		await contract4bx4kb.exit.call({from: accounts[1]});
		await contract4bx4kb.withdraw.call(valuecpNiQn, {from: accounts[1]});
		const nullCErn7sG = await contract4bx4kb.approve.call(spenderTC2Lkt, valuejq2AHW, {from: accounts[4]});
		await contract4bx4kb.deposit.call(valueubJOwD, {from: accounts[3]});
		const nullZzc9XpV = await contract4bx4kb.transfer.call(dstidWDjv, valueNXeFzYF, {from: accounts[4]});

		await expect(contract4bx4kb.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractb3Iqdu = await VBZRXWrapper_alt.new({from: accounts[2]});
		const toggleEMQqeig = true
		const addrWS6pfDW = "0x0000000000000000000000000000000000000001"
		const valueXwmLoV = BigInt("339")
		const spenderVmwTo1Z = accounts[4]
		const toggle5izjCm = false
		const addrR7YnU3O = accounts[3]
		const valueLjqoYiv = BigInt("895")
		await contractb3Iqdu.setBridge.call(addrWS6pfDW, toggleEMQqeig, {from: accounts[1]});
		const null6Y3zfo = await contractb3Iqdu.approve.call(spenderVmwTo1Z, valueXwmLoV, {from: accounts[4]});
		await contractb3Iqdu.setBridge.call(addrR7YnU3O, toggle5izjCm, {from: accounts[1]});
		await contractb3Iqdu.deposit.call(valueLjqoYiv, {from: accounts[4]});
		const nullkD9yJOX = await contractb3Iqdu.claim.call({from: accounts[0]});

		await expect(contractb3Iqdu.setBridge.call(addrWS6pfDW, toggleEMQqeig, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractKSS47Zw = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valuec4VMAHS = BigInt("30")
		const dstyI0avr = "0x0000000000000000000000000000000000000001"
		const account8Hsd6x = accounts[3]
		const value5JKMbw = BigInt("1188")
		const dstm1CVsKZ = accounts[1]
		const srcIN6Jy18 = accounts[2]
		const nulloDJpjW0 = await contractKSS47Zw.transfer.call(dstyI0avr, valuec4VMAHS, {from: accounts[2]});
		const nullH7MmPZO = await contractKSS47Zw.claimable.call(account8Hsd6x, {from: accounts[1]});
		const nullPp8teW = await contractKSS47Zw.transferFrom.call(srcIN6Jy18, dstm1CVsKZ, value5JKMbw, {from: accounts[3]});
		const null7zxEMj = await contractKSS47Zw.claim.call({from: accounts[4]});

		await expect(contractKSS47Zw.transfer.call(dstyI0avr, valuec4VMAHS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractpirk0jN = await VBZRXWrapper_alt.new({from: accounts[0]});
		const valueSmGYWoM = BigInt("171")
		const valueHH5qzdE = BigInt("240")
		const dstHoDFdk = accounts[0]
		const srcCfSQmYP = accounts[1]
		const valueJi7j9J5 = BigInt("1334")
		await contractpirk0jN.deposit.call(valueSmGYWoM, {from: accounts[4]});
		const nullXqj0jyx = await contractpirk0jN.transferFrom.call(srcCfSQmYP, dstHoDFdk, valueHH5qzdE, {from: "0x0000000000000000000000000000000000000001"});
		await contractpirk0jN.withdraw.call(valueJi7j9J5, {from: accounts[3]});

		await expect(contractpirk0jN.deposit.call(valueSmGYWoM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractWrwLVtV = await VBZRXWrapper_alt.new({from: accounts[1]});
		const valueBkyu611 = BigInt("1871")
		const spenderEaQnl1U = accounts[0]
		const toggleCx2DFXo = true
		const addrGYC1pQC = accounts[5]
		const valueCFM1Pa9 = BigInt("1643")
		const spenderGte6TvY = accounts[3]
		const valueUvb7xn = BigInt("103")
		const accountxoE9ZsO = accounts[0]
		const valuefu7N5Tz = BigInt("1020")
		const dstZvgSxVB = accounts[4]
		const srcvJemE3 = accounts[3]
		const nullBIFjwxo = await contractWrwLVtV.approve.call(spenderEaQnl1U, valueBkyu611, {from: accounts[0]});
		await contractWrwLVtV.setBridge.call(addrGYC1pQC, toggleCx2DFXo, {from: accounts[1]});
		const nullDnYcWyX = await contractWrwLVtV.approve.call(spenderGte6TvY, valueCFM1Pa9, {from: accounts[4]});
		await contractWrwLVtV.deposit.call(valueUvb7xn, {from: accounts[0]});
		const nullwxXMmsW = await contractWrwLVtV.claimable.call(accountxoE9ZsO, {from: "0x0000000000000000000000000000000000000001"});
		const nullk8t43jk = await contractWrwLVtV.transferFrom.call(srcvJemE3, dstZvgSxVB, valuefu7N5Tz, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullBIFjwxo, true)
		assert.equal(nullDnYcWyX, true)
		await expect(contractWrwLVtV.approve.call(spenderGte6TvY, valueCFM1Pa9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})