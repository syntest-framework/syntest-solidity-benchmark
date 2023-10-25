const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const nameqdOiYp3 = "3HxYtgUTMVE0PvdIIfVpRlt8CWSIPd6853qql1sCFxb4i5KHxEVJ1lJ278q8PKl1cGsbO5lJeXyBF54EkH"
		const symbolj7h97st = "RgQjMC5mO76BgfxLOnNY0aGYEDvF8KtOByNpRY7xlF6La6SBcZngSLrrhT88EYBqRflVSRGgnLe"
		const contractWfuncyt = await ERC721Metadata.new(nameqdOiYp3, symbolj7h97st, {from: accounts[0]});
		const nullEmkpI5 = await contractWfuncyt.symbol.call({from: accounts[4]});
		const nullcDD4hRN = await contractWfuncyt.name.call({from: accounts[2]});
		const nullrLESFk = await contractWfuncyt.symbol.call({from: accounts[2]});
		const nulll8LGgLI = await contractWfuncyt.symbol.call({from: accounts[4]});
		const nullIMZA2w2 = await contractWfuncyt.name.call({from: accounts[2]});
	});
})