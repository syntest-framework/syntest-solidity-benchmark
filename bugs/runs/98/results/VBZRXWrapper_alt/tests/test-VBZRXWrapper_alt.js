const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractHNCSSIK = await VBZRXWrapper_alt.new({from: accounts[2]});
		const accountLHvr3uY = accounts[5]
		const valueU9i73W = BigInt("1049")
		const nullyiaa7G4 = await contractHNCSSIK.claimable.call(accountLHvr3uY, {from: accounts[2]});
		await contractHNCSSIK.withdraw.call(valueU9i73W, {from: accounts[1]});

		assert.equal(nullyiaa7G4, 0)
		await expect(contractHNCSSIK.withdraw.call(valueU9i73W, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractexra63a = await VBZRXWrapper_alt.new({from: accounts[3]});
		const nullnUDHlTK = await contractexra63a.claim.call({from: accounts[5]});
		await contractexra63a.exit.call({from: accounts[1]});

		assert.equal(nullnUDHlTK, 0)
		await expect(contractexra63a.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractSZ82qtY = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valueacQHrND = BigInt("142")
		const spenderxZsGl8M = accounts[2]
		const accountSCUDpUM = accounts[2]
		const valuexen6Kn = BigInt("34")
		const spenderDaPrsqA = accounts[0]
		const nullc0bL77b = await contractSZ82qtY.approve.call(spenderxZsGl8M, valueacQHrND, {from: accounts[2]});
		const nullNrZqAlL = await contractSZ82qtY.claimable.call(accountSCUDpUM, {from: accounts[1]});
		const nullCYHzTbV = await contractSZ82qtY.approve.call(spenderDaPrsqA, valuexen6Kn, {from: accounts[0]});

		assert.equal(nullCYHzTbV, true)
		assert.equal(nullNrZqAlL, 0)
		assert.equal(nullc0bL77b, true)
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractGGHsBGu = await VBZRXWrapper_alt.new({from: accounts[3]});
		const accountdnsNAqr = accounts[0]
		const valueHnojfoo = BigInt("1072")
		const dstSrKC55B = accounts[0]
		const srcVrq6Yqv = accounts[0]
		const valueyAOzwyd = BigInt("1561")
		const spenderN9JHjfd = accounts[5]
		const valueWXZsqcr = BigInt("547")
		const toggleq04Js80 = false
		const addrJLJCVvj = accounts[1]
		const valueDI1Hrbl = BigInt("1212")
		const nullxNgqYI = await contractGGHsBGu.claimable.call(accountdnsNAqr, {from: accounts[1]});
		const nullT2IGU3H = await contractGGHsBGu.transferFrom.call(srcVrq6Yqv, dstSrKC55B, valueHnojfoo, {from: accounts[2]});
		const nullztSvxrh = await contractGGHsBGu.approve.call(spenderN9JHjfd, valueyAOzwyd, {from: accounts[1]});
		await contractGGHsBGu.deposit.call(valueWXZsqcr, {from: "0x0000000000000000000000000000000000000001"});
		await contractGGHsBGu.setBridge.call(addrJLJCVvj, toggleq04Js80, {from: accounts[2]});
		await contractGGHsBGu.deposit.call(valueDI1Hrbl, {from: accounts[1]});

		assert.equal(nullxNgqYI, 0)
		await expect(contractGGHsBGu.transferFrom.call(srcVrq6Yqv, dstSrKC55B, valueHnojfoo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractSItGaXx = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const toggleacx7vtj = false
		const addrEFrguk = accounts[2]
		await contractSItGaXx.exit.call({from: accounts[1]});
		await contractSItGaXx.setBridge.call(addrEFrguk, toggleacx7vtj, {from: accounts[3]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractSiMzQUk = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valuexznCJvJ = BigInt("1707")
		const valuepCzgbtu = BigInt("838")
		const dstpXTsUKq = accounts[3]
		const srcVw5HeNC = accounts[4]
		const valueLXBUqfq = BigInt("1167")
		const spenderxRj4zH4 = accounts[2]
		const valueB9wIgFs = BigInt("1927")
		const dstR7tqEUb = accounts[4]
		await contractSiMzQUk.deposit.call(valuexznCJvJ, {from: accounts[0]});
		const nullBgmuTzG = await contractSiMzQUk.transferFrom.call(srcVw5HeNC, dstpXTsUKq, valuepCzgbtu, {from: accounts[2]});
		const nullk3ib3UK = await contractSiMzQUk.claim.call({from: accounts[1]});
		const nullnsvoP89 = await contractSiMzQUk.approve.call(spenderxRj4zH4, valueLXBUqfq, {from: accounts[2]});
		const nullZyoJWoy = await contractSiMzQUk.transfer.call(dstR7tqEUb, valueB9wIgFs, {from: accounts[2]});

		await expect(contractSiMzQUk.deposit.call(valuexznCJvJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractCJzVdqp = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valuebqk2nb4 = BigInt("1972")
		const spenderBlKPYw0 = accounts[2]
		const valueNv9LVP = BigInt("774")
		const dstDcSaUzl = accounts[2]
		const valuejv8qr3h = BigInt("965")
		const valueuWIUkNH = BigInt("207")
		const spenderu35RW6 = accounts[0]
		const valueWKEIJdy = BigInt("1807")
		const dstVouDZ9Q = accounts[0]
		const srcCJxUo90 = accounts[0]
		const valuedGvZMMH = BigInt("930")
		const nullU9M9ZhD = await contractCJzVdqp.approve.call(spenderBlKPYw0, valuebqk2nb4, {from: accounts[0]});
		const nullwNzzjL = await contractCJzVdqp.transfer.call(dstDcSaUzl, valueNv9LVP, {from: accounts[1]});
		await contractCJzVdqp.withdraw.call(valuejv8qr3h, {from: accounts[2]});
		const nullx8uu0Uh = await contractCJzVdqp.approve.call(spenderu35RW6, valueuWIUkNH, {from: accounts[2]});
		const nullJryiHTh = await contractCJzVdqp.transferFrom.call(srcCJxUo90, dstVouDZ9Q, valueWKEIJdy, {from: accounts[0]});
		await contractCJzVdqp.withdraw.call(valuedGvZMMH, {from: accounts[1]});

		assert.equal(nullU9M9ZhD, true)
		await expect(contractCJzVdqp.transfer.call(dstDcSaUzl, valueNv9LVP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractnzGKsdX = await VBZRXWrapper_alt.new({from: accounts[3]});
		const valueZVYJDTj = BigInt("180")
		const spenderHUvbhcJ = accounts[4]
		const togglepjH46jO = false
		const addrQUXtepf = accounts[4]
		const valuenOTKr3T = BigInt("1442")
		const dstd20HtIM = accounts[1]
		const srciX6TefK = "0x0000000000000000000000000000000000000001"
		const valueohQwmf = BigInt("84")
		const spenderwCMVH5J = accounts[3]
		const nullODY45sL = await contractnzGKsdX.approve.call(spenderHUvbhcJ, valueZVYJDTj, {from: accounts[2]});
		await contractnzGKsdX.setBridge.call(addrQUXtepf, togglepjH46jO, {from: accounts[1]});
		const nullWIoQELq = await contractnzGKsdX.transferFrom.call(srciX6TefK, dstd20HtIM, valuenOTKr3T, {from: accounts[1]});
		await contractnzGKsdX.exit.call({from: accounts[0]});
		const nullR2OY8ZP = await contractnzGKsdX.approve.call(spenderwCMVH5J, valueohQwmf, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullODY45sL, true)
		await expect(contractnzGKsdX.setBridge.call(addrQUXtepf, togglepjH46jO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractuCY16WD = await VBZRXWrapper_alt.new({from: accounts[3]});
		const togglek4JRSr = true
		const addrJ0BNw4W = accounts[2]
		await contractuCY16WD.setBridge.call(addrJ0BNw4W, togglek4JRSr, {from: accounts[3]});
		await contractuCY16WD.exit.call({from: accounts[1]});

		await expect(contractuCY16WD.setBridge.call(addrJ0BNw4W, togglek4JRSr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})