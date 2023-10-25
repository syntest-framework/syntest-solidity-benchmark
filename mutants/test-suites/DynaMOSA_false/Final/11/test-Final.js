const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringemvQmC4 = "XfC11Pgau3fNuqRHpVP61I767rkmd4Lh4d"
		const stringSp94m6t = "fpc9lwnV4Xd9UBdob9Dpne6m0cZTMpGR8mDfxTssc5jelb1nS0rrF8bpKqYtYrUFNjAYX6w"
		const uintSz5BeFq = BigInt("117")
		const FinalnyosAyX = await Final.new(stringemvQmC4, stringSp94m6t, uintSz5BeFq, {from: accounts[2]});
		const uintButY3f = BigInt("390")
		const addressfJKSPFn = accounts[5]
		const uintJe6XLs6 = await FinalnyosAyX.totalSupply.call({from: accounts[1]});
		const uint8VC1pY0z = await FinalnyosAyX.decimals.call({from: accounts[5]});
//		const boolEflur1W = await FinalnyosAyX.transfer.call(addressfJKSPFn, uintButY3f, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint8VC1pY0z, BigInt("18"))
		assert.equal(uintJe6XLs6, BigInt("117000000000000000000"))
		await expect(FinalnyosAyX.transfer.call(addressfJKSPFn, uintButY3f, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringQPAhwxp = "uUUXIg3Q7g4tMSC3cwUZeGA85zFer7RutAcDP"
		const stringsbra8kG = "Nffu"
		const uintckYV10 = BigInt("263")
		const FinaldGtLcOC = await Final.new(stringQPAhwxp, stringsbra8kG, uintckYV10, {from: accounts[1]});
		const uintlfDl8fN = BigInt("587")
		const addressawk2Py = accounts[0]
		const addressl3BTjs = accounts[0]
		const uintnvaFdln = BigInt("1823")
		const addressJKZIwBl = accounts[2]
		const addresshRq1orN = accounts[4]
		const uintTWm9yII = await FinaldGtLcOC.totalSupply.call({from: accounts[5]});
		const boolD7CLZAQ = await FinaldGtLcOC.approve.call(addressawk2Py, uintlfDl8fN, {from: accounts[3]});
		const stringDj84py = await FinaldGtLcOC.symbol.call({from: accounts[5]});
		const uintMugPY7c = await FinaldGtLcOC.balanceOf.call(addressl3BTjs, {from: accounts[4]});
		const stringj0OSrR = await FinaldGtLcOC.symbol.call({from: accounts[0]});
//		const boolmqNsKpF = await FinaldGtLcOC.transferFrom.call(addresshRq1orN, addressJKZIwBl, uintnvaFdln, {from: accounts[4]});

		assert.equal(boolD7CLZAQ, true)
		assert.equal(stringDj84py, "Nffu")
		assert.equal(stringj0OSrR, "Nffu")
		assert.equal(uintMugPY7c, BigInt("0"))
		assert.equal(uintTWm9yII, BigInt("263000000000000000000"))
		await expect(FinaldGtLcOC.transferFrom.call(addresshRq1orN, addressJKZIwBl, uintnvaFdln, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringCgimdGq = "OFP27bLOmhUgnBrkYNOeleoPuVfuj9jtuAbHQNR7fFBlZi4BGDa"
		const stringGyB81xS = "B8YVSdLWHKem6dADuntX4PhdfVliWtSVxsPCoBBs4I6Q"
		const uintxPPqfJr = BigInt("200")
		const FinalVz6wIn1 = await Final.new(stringCgimdGq, stringGyB81xS, uintxPPqfJr, {from: accounts[4]});
		const uintF2xH9x4 = BigInt("1058")
		const addressXPcOpj6 = "0x0000000000000000000000000000000000000001"
		const addressEcfkC3O = "0x0000000000000000000000000000000000000001"
		const stringsExgrGO = await FinalVz6wIn1.symbol.call({from: accounts[4]});
		const string5tlJP7 = await FinalVz6wIn1.symbol.call({from: accounts[5]});
//		const boolUAAaw3Z = await FinalVz6wIn1.approveAndCall.call(addressXPcOpj6, uintF2xH9x4, {from: accounts[1]});
//		const uintHzZfodx = await FinalVz6wIn1.balanceOf.call(addressEcfkC3O, {from: accounts[3]});

		assert.equal(string5tlJP7, "B8YVSdLWHKem6dADuntX4PhdfVliWtSVxsPCoBBs4I6Q")
		assert.equal(stringsExgrGO, "B8YVSdLWHKem6dADuntX4PhdfVliWtSVxsPCoBBs4I6Q")
		await expect(FinalVz6wIn1.approveAndCall.call(addressXPcOpj6, uintF2xH9x4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringL5bOiFU = "PcYo5XcbnlFcHW9eXdDBQAKEW98Wi3TokjuTqEns2kLR"
		const stringmjFFYBg = "mTyRFLlREdjoVa2eEo4XVVscOAYYCufVZ5QPwGtra637i9stqTxNvtCoNkOkqNRezH3nL"
		const uintOVjN2qe = BigInt("277")
		const FinalVQElnhU = await Final.new(stringL5bOiFU, stringmjFFYBg, uintOVjN2qe, {from: accounts[4]});
		const addressrnS7bP7 = "0x0000000000000000000000000000000000000001"
		const addressNqtaWsf = accounts[1]
		const addressad0RbEH = accounts[2]
		const addressP6umthj = accounts[0]
		const addressF9D6CzU = accounts[5]
		const addressvHtbKlP = accounts[1]
		const uintMPNmbo = await FinalVQElnhU.allowance.call(addressNqtaWsf, addressrnS7bP7, {from: accounts[0]});
		const uint8I3Yduyd = await FinalVQElnhU.decimals.call({from: accounts[2]});
//		const boolw5IjaEu = await FinalVQElnhU.transferownership.call(addressad0RbEH, {from: accounts[1]});
//		const uintOoNi4r8 = await FinalVQElnhU.balanceOf.call(addressP6umthj, {from: accounts[1]});
//		const uintNUFxeOr = await FinalVQElnhU.allowance.call(addressvHtbKlP, addressF9D6CzU, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint8I3Yduyd, BigInt("18"))
		assert.equal(uintMPNmbo, BigInt("0"))
		await expect(FinalVQElnhU.transferownership.call(addressad0RbEH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringEE5SluF = "wg9IhoWV6m5dVzKEX5PEvxmgTuuwoZttmZa7pGbul"
		const stringHVm3zG = "jbuygvbGyj5xBfc4udtRWUzGzTMO1vNnB3JrsHbolXDKwSaqrogNWoo7RFUivNNUBWil4qRA3ct"
		const uintqJB6lxE = BigInt("39")
		const FinalfJKvyL8 = await Final.new(stringEE5SluF, stringHVm3zG, uintqJB6lxE, {from: accounts[2]});
		const uintDGyNEe = BigInt("1375")
		const addresstSjRc8P = accounts[5]
		const uintstlZdz = BigInt("2025")
		const addressYqkfcy = accounts[3]
//		const boolr9vKXs0 = await FinalfJKvyL8.decreaseAllowance.call(addresstSjRc8P, uintDGyNEe, {from: accounts[1]});
//		const uint8Smcq92K = await FinalfJKvyL8.decimals.call({from: accounts[4]});
//		const boolvoSUWfD = await FinalfJKvyL8.increaseAllowance.call(addressYqkfcy, uintstlZdz, {from: accounts[2]});

		await expect(FinalfJKvyL8.decreaseAllowance.call(addresstSjRc8P, uintDGyNEe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringemvQmC4 = "XfC11Pgau3fNuqRHpVP61I767rkmd4Lh4d"
		const stringSp94m6t = "fpc9lwnV4Xd9UBdob9Dpne6m0cZTMpGR8mDfxTssc5jelb1nS0rrF8bpKqYtYrUFNjAYX6w"
		const uintVcgnU7A = BigInt("117")
		const FinalnyosAyX = await Final.new(stringemvQmC4, stringSp94m6t, uintVcgnU7A, {from: accounts[2]});
		const uintyI0lcX = BigInt("559")
		const addressTOnHwIu = accounts[2]
		const addressY1TLZ1p = "0x0000000000000000000000000000000000000001"
		const uintAGzIeO5 = BigInt("778")
		const addresspsZOFif = accounts[0]
		const uintS3C50Dr = BigInt("390")
		const addressFNMcCiN = accounts[5]
//		const boolX1bGBMV = await FinalnyosAyX.transferFrom.call(addressY1TLZ1p, addressTOnHwIu, uintyI0lcX, {from: "0x0000000000000000000000000000000000000001"});
//		const uint8LDjdS0c = await FinalnyosAyX.decimals.call({from: accounts[1]});
//		const boolrvRteB = await FinalnyosAyX.approveAndCall.call(addresspsZOFif, uintAGzIeO5, {from: "0x0000000000000000000000000000000000000001"});
//		const uintJe6XLs6 = await FinalnyosAyX.totalSupply.call({from: accounts[1]});
//		const boolEflur1W = await FinalnyosAyX.transfer.call(addressFNMcCiN, uintS3C50Dr, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FinalnyosAyX.transferFrom.call(addressY1TLZ1p, addressTOnHwIu, uintyI0lcX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringemvQmC4 = "XfC11Pgau3fNuqRHpVP61I767rkmd4Lh4d"
		const stringSp94m6t = "fpc9lwnV4Xd9UBdob9Dpne6m0cZTMpGR8mDfxTssc5jelb1nS0rrF8bpKqYtYrUFNjAYX6w"
		const uintLAcmxoa = BigInt("117")
		const FinalnyosAyX = await Final.new(stringemvQmC4, stringSp94m6t, uintLAcmxoa, {from: accounts[2]});
		const uintQFS1LqI = BigInt("1162")
		const addresskgVXwcX = accounts[4]
		const uintHLxo30G = BigInt("1708")
		const addressPP1wuI = accounts[5]
		const booljYnMHFZ = await FinalnyosAyX.approveAndCall.call(addresskgVXwcX, uintQFS1LqI, {from: accounts[2]});
//		const boolEflur1W = await FinalnyosAyX.transfer.call(addressPP1wuI, uintHLxo30G, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booljYnMHFZ, true)
		await expect(FinalnyosAyX.transfer.call(addressPP1wuI, uintHLxo30G, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringppNYIU = "ElWXqqm5iR91Mv3P"
		const stringCKvGSoV = "hQ7MkrlPCIUFyxrNzJhtwxXnwDqga1gOPQjxlYmPXkuVC6zSsI"
		const uintIE8Zs3 = BigInt("84")
		const FinalDJyYitH = await Final.new(stringppNYIU, stringCKvGSoV, uintIE8Zs3, {from: "0x0000000000000000000000000000000000000001"});
		const uintbyUelS = BigInt("1564")
		const addressuNuOPSY = accounts[2]
		const uint3UDgKI = BigInt("291")
		const addressuoavyfi = "0x0000000000000000000000000000000000000001"
		const addressPTe4l0 = accounts[1]
		const boolgVy7YjO = await FinalDJyYitH.transfer.call(addressuNuOPSY, uintbyUelS, {from: accounts[4]});
		const boolDMKFTL = await FinalDJyYitH.approve.call(addressuoavyfi, uint3UDgKI, {from: accounts[4]});
		const uintJ5RHwQo = await FinalDJyYitH.balanceOf.call(addressPTe4l0, {from: accounts[0]});
	});
})