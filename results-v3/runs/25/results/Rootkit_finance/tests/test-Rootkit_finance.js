const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financeQ6SFOY6 = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUtc6NcF = BigInt("1585")
		const addressnKygg3X = accounts[2]
		const addressBRPAZqk = accounts[3]
		const uintPZ75qcV = BigInt("573")
		const addressQRLUYm = accounts[0]
		const uintXo4Orl7 = BigInt("275")
		const addressFoLN53 = accounts[2]
		const addresstDmm7if = accounts[0]
		const addresskPjIEBh = accounts[5]
		const addresstvUCe8r = accounts[4]
		const boolaEnmFXd = await Rootkit_financeQ6SFOY6.approve.call(addressnKygg3X, uintUtc6NcF, {from: accounts[4]});
		const uint256hncKgOb = await Rootkit_financeQ6SFOY6.balanceOf.call(addressBRPAZqk, {from: accounts[2]});
		const boolguFnYww = await Rootkit_financeQ6SFOY6.transfer.call(addressQRLUYm, uintPZ75qcV, {from: accounts[0]});
		const boolEuSZoOx = await Rootkit_financeQ6SFOY6.transferFrom.call(addresstDmm7if, addressFoLN53, uintXo4Orl7, {from: accounts[1]});
		const uintMqxxNZO = await Rootkit_financeQ6SFOY6.allowance.call(addresstvUCe8r, addresskPjIEBh, {from: accounts[0]});
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financesowLcxD = await Rootkit_finance.new({from: accounts[5]});
		const addressnfuN8VT = accounts[3]
		const addresskUb77tl = accounts[1]
		const uintSJoBKkL = BigInt("1318")
		const addressOYhE72p = accounts[3]
		const uintnNG4hcV = BigInt("58")
		const addressssnOTBf = accounts[2]
		const addressbMZAdT = accounts[2]
		const addresserw6Ugj = accounts[0]
		const addressrNJ3M0w = accounts[0]
		const addressv7LI8nW = accounts[5]
		const addressn5t76xm = accounts[5]
		const addresswFq7t8 = accounts[4]
		const uintTruwOfA = await Rootkit_financesowLcxD.allowance.call(addresskUb77tl, addressnfuN8VT, {from: accounts[3]});
		const boolCla8H53 = await Rootkit_financesowLcxD.approve.call(addressOYhE72p, uintSJoBKkL, {from: accounts[1]});
		const boolUetDdnm = await Rootkit_financesowLcxD.transferFrom.call(addressbMZAdT, addressssnOTBf, uintnNG4hcV, {from: accounts[0]});
		const uinttsj86ud = await Rootkit_financesowLcxD.allowance.call(addressrNJ3M0w, addresserw6Ugj, {from: accounts[1]});
		const uintFxdfHEd = await Rootkit_financesowLcxD.allowance.call(addressn5t76xm, addressv7LI8nW, {from: accounts[2]});
		const uint256A8DfYmr = await Rootkit_financesowLcxD.balanceOf.call(addresswFq7t8, {from: accounts[4]});

		assert.equal(boolCla8H53, true)
		assert.equal(boolUetDdnm, false)
		assert.equal(uint256A8DfYmr, BigInt("0"))
		assert.equal(uintFxdfHEd, BigInt("0"))
		assert.equal(uintTruwOfA, BigInt("0"))
		assert.equal(uinttsj86ud, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeK8ER7O = await Rootkit_finance.new({from: accounts[4]});
		const uintzBFJKLa = BigInt("2000")
		const addressZj4kgcH = accounts[3]
		const uintvho78FF = BigInt("57")
		const addressokeMC6k = accounts[3]
		const uintzvDguV = BigInt("589")
		const addressN4HFCcF = accounts[3]
		const addressvSCf9JA = "0x0000000000000000000000000000000000000001"
		const uintcfTWqLI = BigInt("296")
		const addresseTpcxLw = accounts[5]
		const addressSQDHMEZ = accounts[2]
		const uintevIF3FL = BigInt("1641")
		const addressxHJodT = accounts[4]
		const addressTwJCFw1 = accounts[4]
		const boolQVQHrFD = await Rootkit_financeK8ER7O.transfer.call(addressZj4kgcH, uintzBFJKLa, {from: accounts[0]});
		const boolBzmdExe = await Rootkit_financeK8ER7O.transfer.call(addressokeMC6k, uintvho78FF, {from: accounts[0]});
		const boolqOV3qnH = await Rootkit_financeK8ER7O.transferFrom.call(addressvSCf9JA, addressN4HFCcF, uintzvDguV, {from: accounts[4]});
		const boolimJNqo5 = await Rootkit_financeK8ER7O.transferFrom.call(addressSQDHMEZ, addresseTpcxLw, uintcfTWqLI, {from: accounts[0]});
		const boolBneq4j = await Rootkit_financeK8ER7O.transferFrom.call(addressTwJCFw1, addressxHJodT, uintevIF3FL, {from: accounts[2]});

		assert.equal(boolBneq4j, false)
		assert.equal(boolBzmdExe, false)
		assert.equal(boolQVQHrFD, false)
		assert.equal(boolimJNqo5, false)
		assert.equal(boolqOV3qnH, false)
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeT4fR4Zh = await Rootkit_finance.new({from: accounts[0]});
		const addressQvdag43 = accounts[0]
		const uint256RRN00Xw = await Rootkit_financeT4fR4Zh.balanceOf.call(addressQvdag43, {from: accounts[4]});
		const uint256NsSLR0 = await Rootkit_financeT4fR4Zh.totalSupply.call({from: accounts[4]});

		assert.equal(uint256NsSLR0, BigInt("10000000000000000000000"))
		assert.equal(uint256RRN00Xw, BigInt("10000000000000000000000"))
	});
})