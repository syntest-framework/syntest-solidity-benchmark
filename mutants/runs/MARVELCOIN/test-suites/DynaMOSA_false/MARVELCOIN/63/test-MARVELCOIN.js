const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintpw8Gxv2 = BigInt("1241")
		const stringFtjlk5G = "FMCtCz0hDeWu3VYJo"
		const stringTyRecQl = "kjrSEgjiMTv3mXC7XcUVjpesETo9BOv56HIk761LXXsTyVuDswHNIr7DItPLKVv5Z3aoSu28Tu2GRrmO6qaWk"
		const MARVELCOINgw9asyV = await MARVELCOIN.new(uintpw8Gxv2, stringFtjlk5G, stringTyRecQl, {from: accounts[5]});
		const uintFOXJNP7 = BigInt("719")
		const addressi0FZQK2 = accounts[0]
		const addressWz7owJ6 = accounts[3]
		const uintQPMYMWJ = BigInt("457")
		const addressQl9haGp = accounts[5]
		const uintiptGqZb = BigInt("40")
		const boolVXPuKrt = await MARVELCOINgw9asyV.transferFrom.call(addressWz7owJ6, addressi0FZQK2, uintFOXJNP7, {from: "0x0000000000000000000000000000000000000001"});
		const boolm61yyCx = await MARVELCOINgw9asyV.transfer.call(addressQl9haGp, uintQPMYMWJ, {from: accounts[4]});
		const booldeGWCOB = await MARVELCOINgw9asyV.burn.call(uintiptGqZb, {from: accounts[0]});

		await expect(MARVELCOINgw9asyV.transferFrom.call(addressWz7owJ6, addressi0FZQK2, uintFOXJNP7, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uinthoW2ahk = BigInt("432")
		const stringrk7dnWI = "cneDRUgDx"
		const stringZ3GpwSA = "AYKg63iIl22DQjbIvkdKgMolaqFzvMvnYO9hnca5wAaMMp6c"
		const MARVELCOINg9xEcWT = await MARVELCOIN.new(uinthoW2ahk, stringrk7dnWI, stringZ3GpwSA, {from: accounts[1]});
		const uintfn7McLY = BigInt("1774")
		const addressRjKjf2H = accounts[4]
		const uinti6naZJ = BigInt("568")
		const addressOLPoOC2 = accounts[4]
		const addressvnjNtJo = accounts[4]
		const byteOOGUdiT = "0x181318190d100c"
		const uintgOUBzcY = BigInt("971")
		const addressRddukGQ = accounts[3]
		const byteiqRbaLn = "0x060d151f161b0818121b1806061517081807181a0a1301011e"
		const uintpuRWURk = BigInt("1497")
		const addressuZgWFNc = accounts[2]
		const boolWRLAwp7 = await MARVELCOINg9xEcWT.approve.call(addressRjKjf2H, uintfn7McLY, {from: accounts[0]});
		const boolGSpjRB9 = await MARVELCOINg9xEcWT.transferFrom.call(addressvnjNtJo, addressOLPoOC2, uinti6naZJ, {from: "0x0000000000000000000000000000000000000001"});
		const boolqnUCzVX = await MARVELCOINg9xEcWT.approveAndCall.call(addressRddukGQ, uintgOUBzcY, byteOOGUdiT, {from: accounts[0]});
		const booltiJNkdo = await MARVELCOINg9xEcWT.approveAndCall.call(addressuZgWFNc, uintpuRWURk, byteiqRbaLn, {from: accounts[4]});

		assert.equal(boolWRLAwp7, true)
		await expect(MARVELCOINg9xEcWT.transferFrom.call(addressvnjNtJo, addressOLPoOC2, uinti6naZJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintwK8Ic3P = BigInt("670")
		const stringKcjkxL = "iKOhcmVIVgnVbM3JZzCHRbm3lXQOvORWUnuPkPWnvBo3HwikZKUNKttraS3nTPgmich4incymhYU5IAeJ"
		const stringtx003vo = "4SoYpas80K"
		const MARVELCOINprQu2f = await MARVELCOIN.new(uintwK8Ic3P, stringKcjkxL, stringtx003vo, {from: accounts[3]});
		const uintYdq8alo = BigInt("2034")
		const addressauvbQll = accounts[4]
		const uintKEPnj6e = BigInt("699")
		const uintG3z8H6 = BigInt("1959")
		const addressgv9B3Xz = accounts[2]
		const boolq8PrucQ = await MARVELCOINprQu2f.burnFrom.call(addressauvbQll, uintYdq8alo, {from: accounts[2]});
		const boolXJTiFdv = await MARVELCOINprQu2f.burn.call(uintKEPnj6e, {from: accounts[4]});
		const boolYRmomIe = await MARVELCOINprQu2f.approve.call(addressgv9B3Xz, uintG3z8H6, {from: accounts[4]});

		await expect(MARVELCOINprQu2f.burnFrom.call(addressauvbQll, uintYdq8alo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintWuWk1sc = BigInt("77")
		const string5wqshZ = "VyEkEIsk7NUjDbMrJmTMsgYclnt3lhR2rJ"
		const stringNZPclES = "B9QggAZUtebMvxs4fGOqkMsNhqKU8Lwi8GR7O6f0lN7z8RXvFPf7xsAUQnI37j17CDgIqOxMG8xxN5ndEHK0iLhSK"
		const MARVELCOINhNHH8z8 = await MARVELCOIN.new(uintWuWk1sc, string5wqshZ, stringNZPclES, {from: accounts[2]});
		const uintvFC9D17 = BigInt("26")
		const addresseKdcRZx = accounts[1]
		const uintj802JMw = BigInt("938")
		const addresskEBtPFj = accounts[5]
		const byteph6ODRL = "0x1f030802010f0a011c060e14011c0c0c1b0412140f0b"
		const uintFCLIjBz = BigInt("1283")
		const addresshwGRfXT = accounts[5]
		const boolrY89AJh = await MARVELCOINhNHH8z8.approve.call(addresseKdcRZx, uintvFC9D17, {from: accounts[4]});
		const boolWRGjTRo = await MARVELCOINhNHH8z8.approve.call(addresskEBtPFj, uintj802JMw, {from: accounts[2]});
		const boolYUMKmc = await MARVELCOINhNHH8z8.approveAndCall.call(addresshwGRfXT, uintFCLIjBz, byteph6ODRL, {from: accounts[2]});

		assert.equal(boolWRGjTRo, true)
		assert.equal(boolrY89AJh, true)
		await expect(MARVELCOINhNHH8z8.approveAndCall.call(addresshwGRfXT, uintFCLIjBz, byteph6ODRL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintFHabSXk = BigInt("1287")
		const stringrAGzMLZ = "pE1DSO6zRmbS3Qitl6SPUkVz7R0OiLlCFAkjqdSbwNczeC2fkx3LWJdiIDKet6Q5cfhhOATnY6pgOVw7NSAFkYk"
		const stringvRxKlw7 = "4shYUo9luNlEcS7B7EVYJBI4v3vjemhfKqSaKq5LcGNe8eKj7R42lnXByfa4KP"
		const MARVELCOINKYlxyjf = await MARVELCOIN.new(uintFHabSXk, stringrAGzMLZ, stringvRxKlw7, {from: accounts[1]});
		const uintuOCoeSr = BigInt("1363")
		const uintPnOlnq3 = BigInt("434")
		const uintOYgEdhr = BigInt("1520")
		const addressuIIX4om = accounts[2]
		const uintzimYfTk = BigInt("1752")
		const addressKwNaxh = accounts[3]
		const bytePPgyP11 = "0x08070c07"
		const uintTcAiDBD = BigInt("1505")
		const addresshnAHZwF = accounts[4]
		const boolg5QkgTe = await MARVELCOINKYlxyjf.burn.call(uintuOCoeSr, {from: accounts[1]});
		const boolaCRXOB = await MARVELCOINKYlxyjf.burn.call(uintPnOlnq3, {from: "0x0000000000000000000000000000000000000001"});
		const boolGa8cOPA = await MARVELCOINKYlxyjf.burnFrom.call(addressuIIX4om, uintOYgEdhr, {from: accounts[2]});
		const booliQCRSKJ = await MARVELCOINKYlxyjf.approve.call(addressKwNaxh, uintzimYfTk, {from: accounts[0]});
		const boolyY3YUQG = await MARVELCOINKYlxyjf.approveAndCall.call(addresshnAHZwF, uintTcAiDBD, bytePPgyP11, {from: accounts[3]});

		assert.equal(boolg5QkgTe, true)
		await expect(MARVELCOINKYlxyjf.burn.call(uintPnOlnq3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintqnsw8R = BigInt("77")
		const string5wqshZ = "VyEkEIsk7NUjDbMrJmTMsgYclnt3lhR2rJ"
		const stringNZPclES = "B9QggAZUtebMvxs4fGOqkMsNhqKU8Lwi8GR7O6f0lN7z8RXvFPf7xsAUQnI37j17CDgIqOxMG8xxN5ndEHK0iLhSK"
		const MARVELCOINhNHH8z8 = await MARVELCOIN.new(uintqnsw8R, string5wqshZ, stringNZPclES, {from: accounts[2]});
		const uinteaIwUCu = BigInt("26")
		const addressFVmBnnN = accounts[1]
		const uintchxSWO = BigInt("1397")
		const addressEqsB91B = accounts[3]
		const uintW2TfYA = BigInt("1655")
		const addressQaCYjPt = accounts[5]
		const bytezHrZUC4 = "0x1f030802010f0a011c060e14011c0c0c1b0412140f0b"
		const uintblXTtv2 = BigInt("1283")
		const addresssUuZvw = accounts[5]
		const boolrY89AJh = await MARVELCOINhNHH8z8.approve.call(addressFVmBnnN, uinteaIwUCu, {from: accounts[4]});
		const booly3qVrPE = await MARVELCOINhNHH8z8.transfer.call(addressEqsB91B, uintchxSWO, {from: accounts[1]});
		const boolW5OTPyF = await MARVELCOINhNHH8z8.approve.call(addressQaCYjPt, uintW2TfYA, {from: accounts[5]});
		const boolYUMKmc = await MARVELCOINhNHH8z8.approveAndCall.call(addresssUuZvw, uintblXTtv2, bytezHrZUC4, {from: accounts[2]});

		assert.equal(boolrY89AJh, true)
		await expect(MARVELCOINhNHH8z8.transfer.call(addressEqsB91B, uintchxSWO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintprLPOPd = BigInt("701")
		const stringkVnStc = "qaOr3U8mUPpKHoHSNvG7V5hhiMkWhl9fCmGSo8uRu"
		const stringpPAMEUk = "YsM5OGC2zVkYjg3zH2nY7l4QAyOdzBWv6jYqcTsAIR6KbEVMrBJjz8n5GIJjudkXVHQIDJLFSNcUqwcePLndJy7PEEAAE"
		const MARVELCOINGlVkjE = await MARVELCOIN.new(uintprLPOPd, stringkVnStc, stringpPAMEUk, {from: "0x0000000000000000000000000000000000000001"});
		const uintgxYRsNm = BigInt("1826")
		const addressgYI2lKH = accounts[2]
		const addresszCrj4ac = accounts[0]
		const uintQWtXIhp = BigInt("1707")
		const addressY8qorL0 = accounts[1]
		const addressLJgZ4a = accounts[2]
		const uintLGFJ02V = BigInt("551")
		const addressExH9mFK = accounts[2]
		const boolF1QuLYj = await MARVELCOINGlVkjE.transferFrom.call(addresszCrj4ac, addressgYI2lKH, uintgxYRsNm, {from: accounts[1]});
		const boolgbSEnaw = await MARVELCOINGlVkjE.transferFrom.call(addressLJgZ4a, addressY8qorL0, uintQWtXIhp, {from: accounts[2]});
		const boolLrCU47V = await MARVELCOINGlVkjE.transfer.call(addressExH9mFK, uintLGFJ02V, {from: accounts[4]});
	});
})