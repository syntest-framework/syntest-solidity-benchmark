const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractoFQnuP7 = await VBZRXWrapper.new({from: accounts[0]});
		const valuePiWQ35Z = BigInt("1928")
		const dstjhbHdRw = accounts[2]
		const srcoTMPY4G = accounts[4]
		const valueAsISYn = BigInt("1167")
		const dstF3N1dF = accounts[3]
		const valuemcjnTZy = BigInt("1036")
		const dstZ5FZrSr = "0x0000000000000000000000000000000000000001"
		const srcsyfEo7g = accounts[1]
		const nullIrkCbmt = await contractoFQnuP7.claim.call({from: accounts[4]});
		const nullx23DXdB = await contractoFQnuP7.transferFrom.call(srcoTMPY4G, dstjhbHdRw, valuePiWQ35Z, {from: "0x0000000000000000000000000000000000000001"});
		const nullXhPAD5w = await contractoFQnuP7.transfer.call(dstF3N1dF, valueAsISYn, {from: accounts[4]});
		const nullnZgH3Df = await contractoFQnuP7.transferFrom.call(srcsyfEo7g, dstZ5FZrSr, valuemcjnTZy, {from: accounts[0]});

		assert.equal(nullIrkCbmt, 0)
		await expect(contractoFQnuP7.transferFrom.call(srcoTMPY4G, dstjhbHdRw, valuePiWQ35Z, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contracty6dLujz = await VBZRXWrapper.new({from: accounts[4]});
		const accountC8EahFV = accounts[4]
		const valuePvPizVE = BigInt("1211")
		const nullppxrddp = await contracty6dLujz.claimable.call(accountC8EahFV, {from: accounts[2]});
		await contracty6dLujz.deposit.call(valuePvPizVE, {from: accounts[2]});

		await expect(contracty6dLujz.claimable.call(accountC8EahFV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractxE6EoG7 = await VBZRXWrapper.new({from: accounts[1]});
		const valueQpKFCxn = BigInt("1485")
		const dstPhJYFgY = "0x0000000000000000000000000000000000000001"
		const valueheA7RI = BigInt("515")
		const valueMmiSs4d = BigInt("1217")
		const dstBX15BxK = accounts[2]
		const srcTT3qmm = accounts[3]
		const valueoMghd06 = BigInt("641")
		const spenderUh6yu7j = accounts[2]
		const nullviDhsCj = await contractxE6EoG7.claim.call({from: accounts[0]});
		const nullvJg0j0 = await contractxE6EoG7.transfer.call(dstPhJYFgY, valueQpKFCxn, {from: accounts[3]});
		await contractxE6EoG7.deposit.call(valueheA7RI, {from: accounts[3]});
		const nulluaimMHq = await contractxE6EoG7.transferFrom.call(srcTT3qmm, dstBX15BxK, valueMmiSs4d, {from: accounts[0]});
		const nullPDtLDWR = await contractxE6EoG7.approve.call(spenderUh6yu7j, valueoMghd06, {from: accounts[5]});

		assert.equal(nullviDhsCj, 0)
		await expect(contractxE6EoG7.transfer.call(dstPhJYFgY, valueQpKFCxn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractlwbecGs = await VBZRXWrapper.new({from: accounts[4]});
		const valueIwo6HXK = BigInt("1290")
		const dstr1j8Z6 = accounts[4]
		const valueT3aSAYe = BigInt("598")
		const spenderAf8CUeX = accounts[2]
		await contractlwbecGs.exit.call({from: accounts[0]});
		const null8dsE10 = await contractlwbecGs.transfer.call(dstr1j8Z6, valueIwo6HXK, {from: accounts[4]});
		const nulld9SCFvt = await contractlwbecGs.approve.call(spenderAf8CUeX, valueT3aSAYe, {from: accounts[0]});
		await contractlwbecGs.exit.call({from: accounts[0]});
		const nullBWf1zZw = await contractlwbecGs.claim.call({from: accounts[4]});
		const null5Y57lV = await contractlwbecGs.claim.call({from: accounts[3]});

		await expect(contractlwbecGs.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractN5f6S5V = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valueBqGcuIb = BigInt("252")
		const dstaNOUKBt = accounts[2]
		const srccGx3Hy0 = accounts[3]
		const valuelDdpnYo = BigInt("912")
		const nullfXxP2r0 = await contractN5f6S5V.transferFrom.call(srccGx3Hy0, dstaNOUKBt, valueBqGcuIb, {from: accounts[3]});
		const nullTn1GuQa = await contractN5f6S5V.claim.call({from: "0x0000000000000000000000000000000000000001"});
		await contractN5f6S5V.exit.call({from: accounts[3]});
		await contractN5f6S5V.withdraw.call(valuelDdpnYo, {from: accounts[1]});
	});

	it('test for VBZRXWrapper', async () => {
		const contractJcNkwo1 = await VBZRXWrapper.new({from: accounts[0]});
		const valueUnw6pJd = BigInt("1420")
		const spenderIuNo0sm = accounts[3]
		const valuehnv9C1 = BigInt("515")
		const spenderdmHYxik = accounts[5]
		const accountB37zgu = accounts[3]
		const nullHiG5uAw = await contractJcNkwo1.approve.call(spenderIuNo0sm, valueUnw6pJd, {from: "0x0000000000000000000000000000000000000001"});
		const nullJkQVS7A = await contractJcNkwo1.approve.call(spenderdmHYxik, valuehnv9C1, {from: accounts[1]});
		const nullY8jukzh = await contractJcNkwo1.claimable.call(accountB37zgu, {from: accounts[1]});
		const nullGrjt8il = await contractJcNkwo1.claim.call({from: accounts[5]});

		assert.equal(nullHiG5uAw, true)
		assert.equal(nullJkQVS7A, true)
		await expect(contractJcNkwo1.claimable.call(accountB37zgu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractx4XUPY5 = await VBZRXWrapper.new({from: accounts[0]});
		const valueK9c1J9i = BigInt("1327")
		const accountWavUnhe = accounts[2]
		const accountPnhlAQ9 = accounts[3]
		await contractx4XUPY5.deposit.call(valueK9c1J9i, {from: accounts[4]});
		const nullUGdOIJP = await contractx4XUPY5.claim.call({from: accounts[5]});
		const nullaKTSdPW = await contractx4XUPY5.claimable.call(accountWavUnhe, {from: accounts[1]});
		const nullGVzVST7 = await contractx4XUPY5.claim.call({from: accounts[0]});
		const nullelJSRX6 = await contractx4XUPY5.claimable.call(accountPnhlAQ9, {from: accounts[3]});

		await expect(contractx4XUPY5.deposit.call(valueK9c1J9i, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})