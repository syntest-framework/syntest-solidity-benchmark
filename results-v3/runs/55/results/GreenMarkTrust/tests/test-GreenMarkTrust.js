const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintQ2PhguN = BigInt("870")
		const string6WDl38 = ""
		const stringeP12FND = "soXAKSRM53lTo40IwjrOjjK7pmJPfoaSDoIe7uLDmtk6B2RGRHXVELmf4yYH9heiFGExgav"
		const GreenMarkTrustUTgtk7V = await GreenMarkTrust.new(uintQ2PhguN, string6WDl38, stringeP12FND, {from: accounts[4]});
		const uinttdMoi56 = BigInt("423")
		const uintqrXFSWV = BigInt("130")
		const address5T8Hi8 = accounts[1]
		const uintAjIggsO = BigInt("615")
		const addresslob3TNx = accounts[2]
		const addressvJob3wv = accounts[3]
		const uintLfBdyi7 = BigInt("1902")
		const addressEuWOia = "0x0000000000000000000000000000000000000001"
		const boolNh3UQ5g = await GreenMarkTrustUTgtk7V.burn.call(uinttdMoi56, {from: accounts[1]});
		const boolaMgZjDu = await GreenMarkTrustUTgtk7V.burnFrom.call(address5T8Hi8, uintqrXFSWV, {from: accounts[1]});
		const boolhIe7fon = await GreenMarkTrustUTgtk7V.transferFrom.call(addressvJob3wv, addresslob3TNx, uintAjIggsO, {from: "0x0000000000000000000000000000000000000001"});
		const boolQIhDLIE = await GreenMarkTrustUTgtk7V.transfer.call(addressEuWOia, uintLfBdyi7, {from: accounts[4]});

		await expect(GreenMarkTrustUTgtk7V.burn.call(uinttdMoi56, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintgytbQnS = BigInt("1025")
		const stringGq8aFif = "XsTqzIf47l1U4dLkwr4iV7TqSKWOQtBHIjxPFqeGGaX7kXf2DW0HRvXUMLoKXPtuoAyw7pBdJjErnpt"
		const stringFPyTZ6 = "GzPvk9sqVOXl4C25Y3wuU796kJW3WfC5xUwvnyKwUfc1oh"
		const GreenMarkTrusts0YGI2w = await GreenMarkTrust.new(uintgytbQnS, stringGq8aFif, stringFPyTZ6, {from: accounts[4]});
		const uintuNXQggW = BigInt("1335")
		const addressdy5pwj = accounts[0]
		const addressn64PxP = accounts[4]
		const uintraJIFFV = BigInt("579")
		const addressdJrobFh = accounts[4]
		const bytehvLqRys = "0x171e1d11100911171f14041f1b"
		const uinteRuuQSX = BigInt("343")
		const addresslpu0mUD = accounts[2]
		const boolhJEDCA = await GreenMarkTrusts0YGI2w.transferFrom.call(addressn64PxP, addressdy5pwj, uintuNXQggW, {from: accounts[2]});
		const boolqAwunMO = await GreenMarkTrusts0YGI2w.transfer.call(addressdJrobFh, uintraJIFFV, {from: accounts[1]});
		const boolTzIA8ZJ = await GreenMarkTrusts0YGI2w.approveAndCall.call(addresslpu0mUD, uinteRuuQSX, bytehvLqRys, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GreenMarkTrusts0YGI2w.transferFrom.call(addressn64PxP, addressdy5pwj, uintuNXQggW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintBpQ85g = BigInt("1804")
		const stringtPibvLi = "9UGZmh5DZL9ED0BdfBWkt5be9D2zV36zur2BORxgRW4"
		const stringrLq21z = "98xbzuFE5COJt"
		const GreenMarkTrust0Al5lU = await GreenMarkTrust.new(uintBpQ85g, stringtPibvLi, stringrLq21z, {from: accounts[3]});
		const bytecHTv9Zb = "0x19170c0e1c0f04181c0d13"
		const uintL8gv65A = BigInt("598")
		const addressMZB7rI5 = "0x0000000000000000000000000000000000000001"
		const uinthAwM6bH = BigInt("161")
		const addressaedKHtB = accounts[2]
		const uintsDjWylL = BigInt("722")
		const addressEnGhBKq = accounts[1]
		const uintmMDKg0b = BigInt("402")
		const addressUiLirij = accounts[1]
		const booluYX7MrS = await GreenMarkTrust0Al5lU.approveAndCall.call(addressMZB7rI5, uintL8gv65A, bytecHTv9Zb, {from: accounts[3]});
		const boolDnQmqWO = await GreenMarkTrust0Al5lU.approve.call(addressaedKHtB, uinthAwM6bH, {from: accounts[1]});
		const boolRxwB8cI = await GreenMarkTrust0Al5lU.burnFrom.call(addressEnGhBKq, uintsDjWylL, {from: accounts[4]});
		const boolihYrwoH = await GreenMarkTrust0Al5lU.approve.call(addressUiLirij, uintmMDKg0b, {from: accounts[4]});

		await expect(GreenMarkTrust0Al5lU.approveAndCall.call(addressMZB7rI5, uintL8gv65A, bytecHTv9Zb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintuVolRVv = BigInt("1804")
		const stringtPibvLi = "9UGZmh5DZL9ED0BdfBWkt5be9D2zV36zur2BORxgRW4"
		const stringrLq21z = "98xbzuFE5COJt"
		const GreenMarkTrust0Al5lU = await GreenMarkTrust.new(uintuVolRVv, stringtPibvLi, stringrLq21z, {from: accounts[3]});
		const uintm9LsTny = BigInt("1939")
		const addresssgvUEI0 = accounts[3]
		const byteDGGLWLk = "0x19170c0e1c0f04181c0d13"
		const uintm70yz6 = BigInt("598")
		const addressM3Wnb6 = "0x0000000000000000000000000000000000000001"
		const byteB5XP76r = "0x0f03081102131e180d010f0a091310170d0208140e0501"
		const uintCJsrO8g = BigInt("1524")
		const addressROuky4i = accounts[3]
		const uintYQYA6v = BigInt("161")
		const addressxwaSGYF = accounts[2]
		const uinthvEQV1w = BigInt("722")
		const addressDHJLlMP = accounts[1]
		const uintpkFAUc = BigInt("402")
		const addressL3SNttZ = accounts[1]
		const boolp7ovY42 = await GreenMarkTrust0Al5lU.burnFrom.call(addresssgvUEI0, uintm9LsTny, {from: accounts[0]});
		const booluYX7MrS = await GreenMarkTrust0Al5lU.approveAndCall.call(addressM3Wnb6, uintm70yz6, byteDGGLWLk, {from: accounts[3]});
		const booliNYzU7N = await GreenMarkTrust0Al5lU.approveAndCall.call(addressROuky4i, uintCJsrO8g, byteB5XP76r, {from: accounts[2]});
		const boolDnQmqWO = await GreenMarkTrust0Al5lU.approve.call(addressxwaSGYF, uintYQYA6v, {from: accounts[1]});
		const boolRxwB8cI = await GreenMarkTrust0Al5lU.burnFrom.call(addressDHJLlMP, uinthvEQV1w, {from: accounts[4]});
		const boolihYrwoH = await GreenMarkTrust0Al5lU.approve.call(addressL3SNttZ, uintpkFAUc, {from: accounts[4]});

		await expect(GreenMarkTrust0Al5lU.burnFrom.call(addresssgvUEI0, uintm9LsTny, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintvmEOqL9 = BigInt("1025")
		const stringGq8aFif = "XsTqzIf47l1U4dLkwr4iV7TqSKWOQtBHIjxPFqeGGaX7kXf2DW0HRvXUMLoKXPtuoAyw7pBdJjErnpt"
		const stringFPyTZ6 = "GzPvk9sqVOXl4C25Y3wuU796kJW3WfC5xUwvnyKwUfc1oh"
		const GreenMarkTrusts0YGI2w = await GreenMarkTrust.new(uintvmEOqL9, stringGq8aFif, stringFPyTZ6, {from: accounts[4]});
		const uintzBRsgaX = BigInt("1933")
		const addressf8ldEw2 = accounts[3]
		const uintNy27VcO = BigInt("1335")
		const addressuE0yPXC = accounts[0]
		const addressmEJlete = accounts[4]
		const boolnxcJCOg = await GreenMarkTrusts0YGI2w.transfer.call(addressf8ldEw2, uintzBRsgaX, {from: accounts[2]});
		const boolhJEDCA = await GreenMarkTrusts0YGI2w.transferFrom.call(addressmEJlete, addressuE0yPXC, uintNy27VcO, {from: accounts[2]});

		await expect(GreenMarkTrusts0YGI2w.transfer.call(addressf8ldEw2, uintzBRsgaX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintzbgzQOT = BigInt("1999")
		const stringBr0j03B = "3z4i4UumLoKWfHNMWqsGxiY6EQWCtH4wpGnRypOK06L5cIAseb7I"
		const stringvjkzsHR = "1EFaI1XBXbidK"
		const GreenMarkTrustmWJ7Lv1 = await GreenMarkTrust.new(uintzbgzQOT, stringBr0j03B, stringvjkzsHR, {from: "0x0000000000000000000000000000000000000001"});
		const uintObipHF = BigInt("1529")
		const uinttuRgjTz = BigInt("976")
		const addressz3LOukw = accounts[3]
		const uintGuLGKas = BigInt("1710")
		const addressXEduyeW = accounts[5]
		const addressGclPMzY = accounts[1]
		const boolQLAIE2o = await GreenMarkTrustmWJ7Lv1.burn.call(uintObipHF, {from: accounts[2]});
		const boolGjaF5sx = await GreenMarkTrustmWJ7Lv1.approve.call(addressz3LOukw, uinttuRgjTz, {from: accounts[0]});
		const boolEZxTk9G = await GreenMarkTrustmWJ7Lv1.transferFrom.call(addressGclPMzY, addressXEduyeW, uintGuLGKas, {from: accounts[4]});
	});
})